function getExamples(word){

    var wordnikURL = "http://api.wordnik.com/v4/word.json/";
    var apiKey = "6dc8875e590d22ec6500708b82f0904a55a48441d6a3cb9db";
    var EXurl = wordnikURL + word + "/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=4&api_key=" + apiKey;

	   $.ajax ({
		      url: EXurl,
          type:"GET",
		      dataType: "jsonp" ,

            //error:function(err){
            //console.log("Oh no! Examples Error");
            //console.log(err);

          success:function(data){
              //console.log("WooHoo Examples!");
              //console.log(data);

              $('#examples').html("");
              $("#examples").append("<p class='title-word-italic'>examples using '"+ word + "':</p>");
              var examplesList = data.examples;

              if (!examplesList){
              $("#examples").append("Word cannot be found!");
              }

              else {

                  for (var i=0; i<examplesList.length; i++) {
                  var ej="<div>" + "- " + examplesList[i].text + "</div>";
                  $("#examples").append(ej);
                  }
              }
          }
      });
    }
