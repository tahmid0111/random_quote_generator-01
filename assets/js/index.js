import { getQuoteId } from "./utils.js";

const apiBaseURL = "https://dummyjson.com/quotes";
const quoteElement = document.getElementById("quote");
const quoteElement2 = document.getElementById("author");

// Get today's quote based on the day of the year
function getQuoteOfTheDay() {
  const quoteId = getQuoteId();

  fetch(`${apiBaseURL}/${quoteId}`)
    .then((response) => response.json())
    .then((data) => {
      displayQuote(data);
    })
    .catch((error) => {
      console.error("Error fetching the quote:", error);
    });
}
// Function to display the fetched quote
function displayQuote(quote) {
  quoteElement.innerHTML = `"${quote.quote}"`;
  quoteElement2.innerHTML = ` - ${quote.author}`;
}

getQuoteOfTheDay();
