// W06 Final Project .js file

document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const shareTwitterButton = document.getElementById("share-twitter-btn");
    const shareFacebookButton = document.getElementById("share-facebook-btn");
    const shareLinkedInButton = document.getElementById("share-linkedin-btn");
    const copyQuoteButton = document.getElementById("copy-quote-btn");

    // Fetch quotes from the API
    function fetchQuote() {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => {
                // Get a random quote from the array
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];
                displayQuote(randomQuote);
            })
            .catch(error => {
                console.error("Error fetching quotes:", error);
                displayError();
            });
    }

// Display quote and author
function displayQuote(quote) {
    delete quote.source;
    delete quote.type;

    // Remove "type.fit" from the author field if present
    const author = quote.author.replace(", type.fit", "").trim();

    // Display quote and author
    quoteElement.textContent = quote.text;
    authorElement.textContent = `- ${author || "Unknown"}`;
}
    // Display error message
    function displayError() {
        quoteElement.textContent = "Failed to fetch quote. Please try again later.";
        authorElement.textContent = "";
    }

    // Function to copy quote to clipboard
    function copyQuote() {
        const quoteText = quoteElement.textContent;
        const authorText = authorElement.textContent;
        const quoteWithAuthor = `${quoteText} - ${authorText}`;
        
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = quoteWithAuthor;
        document.body.appendChild(tempTextArea);
        
        tempTextArea.select();
        document.execCommand("copy");
        
        document.body.removeChild(tempTextArea);
        
        alert("Quote copied to clipboard!");
    }

    // Function to share on Twitter
    function shareOnTwitter() {
        const quoteText = encodeURIComponent(quoteElement.textContent);
        const authorText = encodeURIComponent(authorElement.textContent);
        const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText} ${authorText}`;
        window.open(tweetUrl, "_blank");
    }

    // Function to share on Facebook
    function shareOnFacebook() {
        window.open("https://www.facebook.com/sharer/sharer.php?u=https://example.com", "_blank");
    }

    // Function to share on LinkedIn
    function shareOnLinkedIn() {
        window.open("https://www.linkedin.com/shareArticle?url=https://example.com", "_blank");
    }

    // Event listeners for buttons
    shareTwitterButton.addEventListener("click", shareOnTwitter);
    shareFacebookButton.addEventListener("click", shareOnFacebook);
    shareLinkedInButton.addEventListener("click", shareOnLinkedIn);
    copyQuoteButton.addEventListener("click", copyQuote);

    // Initial fetch
    fetchQuote();
});