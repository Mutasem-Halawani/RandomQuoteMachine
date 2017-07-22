
//To get a quote on the beginning 
$(function() {
  buildQuote();
});


$('button').on('click',function(e){
   buildQuote();
}); 


function buildQuote(){
    var quoteIndex = Math.floor(Math.random() * (quotes.length));
    
    $("#quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $("#quote-text").text(quotes[quoteIndex].quote);
        });

      $("#quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $("#quote-author").text(quotes[quoteIndex].author);
        });
    
    addQuoteToTwitterIcon(quoteIndex);
    changeColors();
}

function addQuoteToTwitterIcon(quote){
    $("#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + 
            quotes[quote].quote + ' - by ' + quotes[quote].author);
}


function changeColors(){
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
//
    var color = Math.floor(Math.random() * colors.length);
      $("button").animate({
         backgroundColor: colors[color]
      }, 1000);

      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
}



