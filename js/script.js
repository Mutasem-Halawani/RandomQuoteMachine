
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
    
    changeColors();
}

function addQuoteToTwitterIcon(quoteIndex){
    $("#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + 
            quotes[quoteIndex].quote + ' - by ' + quotes[quoteIndex].author);
}


function changeColors(){
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
//    $("#quote-text").animate({
//              opacity: 0
//            }, 500);
//
//              $('#quote-text').animate({
//                opacity: 1
//              }, 500);
//
//          $(".quote-author").animate({
//              opacity: 0
//            }, 500,
//            function() {
//              $(this).animate({
//                opacity: 1
//              }, 500);
//              $('#author').html(r.author);
//            });
//
          var color = Math.floor(Math.random() * colors.length);
          console.log(color);
           $("html body").css('background-color',colors[color]);
           $("div.quote").css('color',colors[color]);
           $("button").css('background-color',colors[color]);
          $("html body").animate({
            backgroundColor: colors[color],
            color: colors[color]
          }, 1000);
          $("button").animate({
            backgroundColor: colors[color]
          }, 1000);
    //    }
//      });
    
    
}



