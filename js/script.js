// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

let quotes = [
  {
    quote: "You don’t love because: you love despite; not for the virtues, but despite the faults.",
    source: "William Faulkner",
    citation: "Mississippi",
    year: 1954,
    tags: "love"
  },
  {
    quote:  "Love is the voice under all silences, the hope which has no opposite in fear; the strength so strong mere force is feebleness the truth more first than sun, more last than star.",
    source:  "e.e. cummings",
    citation: "being to timelessness as it’s to time",
    year: 1958,
    tags: "love",
  },
  {
    quote: "I have not failed. I have just found 10,000 things that do not work.",
    source: "Thomas Edison",
    tags: "inspirational"
  },
  {
    quote:  "Don't become a mere recorder of facts, but try to penetrate the mystery of their origin.",
    source: "Ivan Pavlov",
    tags: "psychology"
  },
  {
    quote: "We must learn to live together as brothers or perish together as fools.",
    source: "Martin Luther King Jr",
    tags: "inspirational"
  },
  {
    quote: "Love is a smoke and is made with the fume of sighs.",
    source: "William Shakespeare",
    citation: "Romeo & Juliet – Act 1, Scene 1",
    year: 1597,
    tags: "love"
  },
];


// Create the getRandomQuuote function and name it getRandomQuote

//Gets random quote from quotes array
function getRandomQuote (array){
  let numb = Math.floor(Math.random() * array.length);
  return array[numb];

}

// Create the printQuote funtion and name it printQuote

//prints a random quote to the page
function printQuote (){
  let randNumb = getRandomQuote(array);
  let quotePrinted = '';

  quotePrinted += '<p class="quote">' + quotes[randNumb].name + '</p>';
  quotePrinted += '<p class="source">' + quotes[randNumb].source;

  //only including citation, year and tags if they exist otherwise it ends with they name and source
  if (quotes[randNumb].citation){
    quotePrinted += '<span class="citation">' + quotes[randNumb].citation + '</span>';
  }else if (quotes[randNumb].year){
    quotePrinted += '<span class="year">' + quotes[randNumb].year + '</span>';
  } else if (quotes[randNumb].tags) {
    quotePrinted += '<span class="tags">' + quotes[randNumb].tags + '</span>';
  } else {
    quotePrinted += '</p>'
  }

  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
