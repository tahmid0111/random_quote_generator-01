    // this function is to load the users info
    const loadUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(users => showUser(users.results[0]))
    }

    // this function is for showing the users information
    const showUser = (user) => {
        const userImage = document.getElementById('user-image-id')
        const userName = document.getElementById('user-name-id')

        userImage.setAttribute('src', `${user.picture.large}`);
        userName.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
    }



    // this function is to load the quotes
    const loadQuotes = () => {
        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(quotes => showQuotes(quotes.quote))
    }
        
    // this function is for showing the quote
    const showQuotes = (quote) => {
        const showQuote = document.getElementById('quote-id')

        showQuote.innerText = `~~ ${quote} ~~`
    }

    // JavaScript to add functionality to the button
    document.getElementById('refreshButton').addEventListener('click', function() {
        // Reload the page
        location.reload();
    });

    loadQuotes();
    
    loadUser();