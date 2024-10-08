const apiBaseURL = "https://dummyjson.com/quotes"; // Base API for fetching a specific quote
const quoteElement = document.getElementById("quote"); // The element where the quote will be displayed

// Get today's quote based on the day of the year
function getQuoteOfTheDay() {
  // Get the current day of the year (1 to 365)
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) + 1; // Ensure we start from day 1

  // Map the day of the year to a quote ID (1 to 400)
  const quoteId = dayOfYear % 400 || 400; // This ensures we cycle between 1 to 400

  // Fetch the quote based on the calculated quoteId
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
  quoteElement.textContent = `"${quote.quote}" - ${quote.author}`;
}

// Call the function to get and display today's quote
getQuoteOfTheDay();
