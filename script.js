
//To get a quote on the beginning 
$(function() {
  buildQuote();
});


$('button').on('click',function(e){
   buildQuote()
}); 

function buildQuote(){
    var quoteIndex = Math.floor(Math.random() * (quotes.length));
    $("#quote-text").text(quotes[quoteIndex].quote);
    $("#quote-author").text(quotes[quoteIndex].author);
}



