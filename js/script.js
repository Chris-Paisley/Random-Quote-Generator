// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

let quotes = [
  {
    quote: "You don’t love because: you love despite; not for the virtues, but despite the faults.",
    source: "William Faulkner",
    citation: "Mississippi",
    year: "1954",
    tags: "love"
  },
  {
    quote:  "A loving heart is the truest wisdom.",
    source:  "Charles Dickens",
    citation: "David Copperfield",
    year: "1849",
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
    year: "1597",
    tags: "love"
  },
]; //End of quotes array


//Gets random quote from quotes array
function getRandomQuote (array){
  let numb = quotes[Math.floor(Math.random() * quotes.length)];
  return numb;
}

//prints a random quote to the page
function printQuote (){
  let randNumb = getRandomQuote();
  //Empty string to build the new string of quote, source, year and citation
  let quotePrinted = '';

  //Adding the random quote and its source to the quotePrinted string
  quotePrinted += '<p class="quote">' + randNumb.quote + '</p>';
  quotePrinted += '<p class="source">' + randNumb.source;

  //only including citation, year and tags if they exist otherwise it ends with the quote name and source
  if (randNumb.hasOwnProperty('citation')){
    quotePrinted += '<span class="citation"> ' + randNumb.citation + '</span>';
    if (randNumb.hasOwnProperty('year')){
      quotePrinted += '<span class="year"> ' + randNumb.year + '</span>';
    }
    if (randNumb.hasOwnProperty('tags')) {
      quotePrinted += '<p class="tags"> #' + randNumb.tags + '</p>';
    }
  }else if (randNumb.hasOwnProperty('tags')) {

    quotePrinted += '<p class="tags"> #' + randNumb.tags + '</p>';
  } else {
    quotePrinted += '</p>'
    return quotePrinted;
  }

  document.getElementById('quote-box').innerHTML = quotePrinted;
} //End of printQuote function

//print quote to the page
printQuote();

//get random number between 0 and 255
function rgbNumb (){
  return Math.floor(Math.random() * 256);
}

//call it for red, green,and blue
//form string into 'rgb(' + number + ',' + number + ',' + number + ')'
function randColor(){
  let color = "rgb(";
  color += rgbNumb() + ',';
  color += rgbNumb() + ',';
  color += rgbNumb() + ')';
  //sets the rgb to the bodys background
  document.body.style.backgroundColor = color;
  return color;
}

//add it to the brackground to change on click with the quotes
console.log(randColor());

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
