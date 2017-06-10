
//To get a quote on the beginning 
$(function() {
  buildQuote();
});


$('button').on('click',function(e){
   buildQuote();
}); 


function buildQuote(){
    var quoteIndex = Math.floor(Math.random() * (quotes.length));
    $("#quote-text").text(quotes[quoteIndex].quote);
    $("#quote-author").text(quotes[quoteIndex].author);
    addQuoteToTwitterIcon(quoteIndex);
}

function addQuoteToTwitterIcon(quoteIndex){
    $("#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + 
            quotes[quoteIndex].quote + ' - by ' + quotes[quoteIndex].author);
}




