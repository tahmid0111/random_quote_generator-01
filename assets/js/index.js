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
function getQuoteId() {
  // Get the current day of the year (1 to 365)
  const today = new Date();
  const dayOfWeek = today.getDay();
  document.body.style.backgroundImage = `url('/assets/img/${dayOfWeek}.jpg')`;
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) + 1; // Ensure we start from day 1
  return dayOfYear;
}

// Function to display the fetched quote
function displayQuote(quote) {
  
  quoteElement.innerHTML = `"${quote.quote}"`;
  quoteElement2.innerHTML = ` - ${quote.author}`;
}

getQuoteOfTheDay();
