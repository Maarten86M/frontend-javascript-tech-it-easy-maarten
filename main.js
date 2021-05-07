// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


// OPDRACHT 1
// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.


function calculateTvtoSell () {
  const tvSoldArray = inventory.map((television) => {
    return television.originalStock - television.sold;
  })

  let outcome = 0;
  for (let i =0; i < tvSoldArray.length; i ++){
    const tvsoldNumber = tvSoldArray[i];
    outcome = outcome + tvsoldNumber;
  }
  return outcome;
}

const totalCount = calculateTvtoSell();
console.log("Dit is de total count",totalCount)

// OPDRACHT 1B
// Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
const toSellDisplay = document.getElementById('tvs-to-sell');
toSellDisplay.textContent = totalCount + " Tv's" ;




// OPDRACHT 2
// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.

const tvType = inventory.map((tvtype) => {
  return tvtype.type;
})
const tvtypeArray = tvType;
console.log("All tv type name",tvtypeArray);

//     Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
const soldOut = inventory.filter((soldout) => {
  const solded =  soldout.originalStock - soldout.sold;
  if (solded == 0){
    return soldout;
  } else {
    return;
  }
})

const soldOutArray = soldOut;
console.log("Tv's that are Soldout",soldOutArray);

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
const ambilightTvs = inventory.filter((inventor) => {
  return inventor.options.ambiLight;
})
const ambiArray = ambilightTvs;
console.log("All tv's with Ambilight",ambiArray);

// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
const sortPrices = inventory.sort((a,b) => {
  return a.price - b.price;
})
const totalsortPrice = sortPrices;
console.log("Price low to high", totalsortPrice);


// Opdracht 3
// Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.

function howMuchtoSell() {

  const totalTV = inventory.map((television) => {
    return (television.originalStock - television.sold) * television.price;
  })
  let totalToSell = 0;
  for (let i = 0; i < inventory.length; i++){
    const tvNumber = totalTV[i];
    totalToSell = totalToSell + tvNumber;
  }
  return totalToSell;
}
const totalToSell = howMuchtoSell();
console.log("total to sell: ",totalToSell);
//weergevem
const amountRevenue = document.getElementById('total-revenue');
amountRevenue.textContent = "€" + totalToSell;

//     Opdracht 6b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina

function soldTotallyTillNow() {

  const soldTotallyTillNowArray = inventory.map((television) => {
    return television.sold * television.price;
  })

  let soldtillnowCount = 0;
  for (let i = 0; i < inventory.length; i++){
    const tvEuro = soldTotallyTillNowArray[i];
    soldtillnowCount = soldtillnowCount + tvEuro;
  }
  return soldtillnowCount;
}

const totalySold = soldTotallyTillNow();
console.log("Sold Totally till now", totalySold);
// weergeven
const totalySoldDisplay = document.getElementById('totaly-sold-till-now');
totalySoldDisplay.textContent = "€" + totalySold;

// Opdracht 4
// Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!
//

const tvOne = inventory.find((television) => {
  return television.type === "55PUS7805";
})
const tvOnetoDisplay = tvOne.type ;
// //weergeven
// const tvOneDisplay = document.getElementById('tv-one');
// tvOneDisplay.textContent = tvOnetoDisplay;
//
// const tvTwo = inventory.find((television) => {
//   return television.type === "50PUS7304/12";
// })
// const tvTwotoDisplay = tvTwo.type;
// //weergeven
// const tvTwoDisplay = document.getElementById('tv-two');
// tvTwoDisplay.textContent = tvTwotoDisplay;

// OPDRACHT 5

// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
//

const inputOne = [{
  brand: 'Toshiba',
  type: '32WL1A63DG',
  name: 'HD TV'
}];

function makeNameArrayFunction(inputOne) {
  const makeNameArray = inputOne.map((tvName) =>{
    return tvName.brand + " " + tvName.type + " - " + tvName.name;
  });
  return makeNameArray;
}
const nameString = makeNameArrayFunction(inputOne);
console.log("dit is de array", nameString);


// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
//
function makePrice(price) {
  return "€ " + price;
}
const result = makePrice(379);
console.log("Dit is de prijs:",result);

//Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58] geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.
//

const inputInch = [43, 50, 55, 58];

function convertInchToCM(inputInch) {
  const inputArray = inputInch.map((inputsize) => {
    return inputsize + " inch " +"("+ inputsize * 2.54 + " cm)   |   ";
  });
  return inputArray;
}
const convertedToCM = convertInchToCM(inputInch);
console.log("Dit is de Array met Inch to CM:",convertedToCM) ;


// Opdracht 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//
const displayName = document.getElementById('display-merk');
displayName.textContent = nameString;

const displayPrice = document.getElementById('display-price');
displayPrice.textContent = result;

const displayInch = document.getElementById('display-inch');
displayInch.textContent = convertedToCM ;



// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!
// De functie vanuit de vorige opdracht herschreven naar alle tv's.

//NAME TO STRING.
function allTVmakeArrayFunction(inventory) {
  // make name:
  const makeNameArray = inventory.map((tvName) =>{
    return tvName.brand + " " + tvName.type + " - " + tvName.name + '\n'
        + " €"+tvName.price +" " + '\n'
        + tvName.availableSizes + " inch " +"(" + (tvName.availableSizes * 2.54) + " cm)   |   "+ '\n'+ '\n'
  });
  return makeNameArray ;
}

// het is mij niet gelukt om in de inch array overal de cm weer te geven. Dit lukte wel bij 1 tv maar niet bij meerdere tv's.


const allTVnameString = allTVmakeArrayFunction(inventory);
console.log("all tv name:", allTVnameString);

const alltvElement = document.createElement('p');
alltvElement.innerText = allTVnameString;
alltvElement.style.fontSize = "17px";
alltvElement.style.fontWeight = "bold";
document.body.appendChild(alltvElement);

