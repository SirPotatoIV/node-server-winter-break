// Dependencies
// =============================================================
const path = require("path");
// Routes
// =============================================================
const quotes = ["The question isn't 'what are we going to do', the question is 'what aren't we going to do?'", 
    "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    "First of all you can never go too far. Second of all, if I'm going to be caught, it's not gonna be by a guy like that!",
    "He’ll keep calling me, he’ll keep calling me until I come over. He’ll make me feel guilty. This is uh… This is ridiculous, ok I’ll go, I’ll go, I’ll go, I’ll go, I’ll go. What – I’LL GO."
]

function selectRandomQuote(){
    const randomQuoteIndex = Math.floor(Math.random()*quotes.length)
    // console.log(randomQuoteIndex)
    return quotes[randomQuoteIndex];
}

module.exports = function(app) {

  // Each of the below routes just handles getting info from the api.

  // index route loads view.html
  app.post("/api/quotes", function(req, res) {
    console.log(req.body)
    res.json(selectRandomQuote());
  });

};
