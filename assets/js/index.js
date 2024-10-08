import { getQuoteId } from "./utils.js";

const apiBaseURL = "https://dummyjson.com/quotes";
const quoteElement = document.getElementById("quote");
const quoteElement2 = document.getElementById("author");
const loading = document.getElementById("loading");

// Get today's quote based on the day of the year
function getQuoteOfTheDay() {
  const quoteId = getQuoteId();

  // Display the loading element
  loading.style.display = "block";

  fetch(`${apiBaseURL}/${quoteId}`)
    .then((response) => response.json())
    .then((data) => {
      displayQuote(data);
      // Hide the loading element
      loading.style.display = "none";
    })
    .catch((error) => {
      console.error("Error fetching the quote:", error);
    });
}

// Function to display the fetched quote
function displayQuote(data) {
  quoteElement.innerHTML = `"${data.quote}"`;
  quoteElement2.innerHTML = ` - ${data.author}`;
}

getQuoteOfTheDay();
