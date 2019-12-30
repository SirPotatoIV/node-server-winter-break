const quoteDisplayEl = document.getElementById("quoteDisplay")
const quoteBtnEl = document.getElementById("quoteBtn")

quoteBtnEl.addEventListener("click", function(){
    axios.post('/api/quotes', {
        text: "post recieved"
      })
      .then(function ({data}) {
        displayQuote(data)
      })
      .catch(function (error) {
        console.log(error);
      });
})

function displayQuote(randomQuote){
    quoteDisplayEl.innerHTML = `<div>${randomQuote}`
}
