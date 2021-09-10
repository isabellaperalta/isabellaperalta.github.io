//function to get definition of word

function getDefinition(word){

    var wordnikURL = "http://api.wordnik.com/v4/word.json/";
    var apiKey = "6dc8875e590d22ec6500708b82f0904a55a48441d6a3cb9db";
    var EXurl = wordnikURL + word + "/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=" + apiKey;

	   $.ajax ({
		     url: EXurl,
         type:"GET",
		     dataType: "jsonp" ,

          error:function(err){
          //console.log("Oh no! Definition Error");
          //console.log(err);
          },

          success:function(data){
          console.log("WooHoo Definition!");
          console.log(data);

          $('#definition').html("");
          $("#definition").append("<p class='title-word'>definition</p>");

          if (data.length===0){
              $("#definition").append("Word cannot be found!");
              $(".footer").html("<p class='theFooter'><a href='http://bfp226.nyuad.im/appellation/about.html'>about this site</a></p>");
          }

          else {

          for (var i=0; i<data.length; i++) {
            var ej="<div>" + "- " + data[i].text + "</div>";
            $("#definition").append(ej);
            $(".footer").html("<p class='theFooter'><a href='http://bfp226.nyuad.im/appellation/about.html'>about this site</a></p>");
            }
          }
        }
      });
    }
