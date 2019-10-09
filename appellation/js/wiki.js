//function to get Wiki info

function getWiki(term){

    var searchwikiURL="https://en.wikipedia.org/w/api.php?action=opensearch&limit=4&format=json&search=";
    var explainURL = searchwikiURL + term;
    console.log(explainURL);

    $.ajax({
        url:explainURL,
        type:'GET',
        dataType:'jsonp',

          error:function(err){
          console.log("Oh no! Error");
          console.log(err);
        },

          success:function(data){
          console.log("WooHoo Wiki!");
          console.log(data);

          $('#wiki').html("");
					$("#wiki").append("<p class='title-word-italic'>wikipedia info about '" + term + "':</p>");
          var results=data[2];

          if  (results.length===0){
              $("#wiki").append("Word cannot be found!");
          }

          else {
              for (var i=0; i<results.length; i++) {
              var htmlString="<div>" + "- " + results[i]+ "</div>";
              $("#wiki").append(htmlString);
          }
        }
      }
  });
}
