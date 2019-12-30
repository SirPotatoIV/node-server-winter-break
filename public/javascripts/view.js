const quotes = ["The question isn't 'what are we going to do', the question is 'what aren't we going to do?'", 
    "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    "First of all you can never go too far. Second of all, if I'm going to be caught, it's not gonna be by a guy like that!",
    "He’ll keep calling me, he’ll keep calling me until I come over. He’ll make me feel guilty. This is uh… This is ridiculous, ok I’ll go, I’ll go, I’ll go, I’ll go, I’ll go. What – I’LL GO."
]
const quoteDisplayEl = document.getElementById("quoteDisplay")
const quoteBtnEl = document.getElementById("quoteBtn")

quoteBtnEl.addEventListener("click", function(){
    displayQuote()
})

function selectRandomQuote(){
    const randomQuoteIndex = Math.floor(Math.random()*quotes.length)
    // console.log(randomQuoteIndex)
    return quotes[randomQuoteIndex];
}

function displayQuote(){
    quoteDisplayEl.innerHTML = `<div>${selectRandomQuote()}`
}displayQuote()