//function for descriptive words

function getDatamuse(word) {

    var linkDatamuse = "https://api.datamuse.com/words?rel_jjb=" + word + "&max=10";

          $.ajax ({
     		     url: linkDatamuse,
             type:"GET",
     		     dataType: "json",

             error:function(err){
             //console.log("Oh no! Definition Error");
             //console.log(err);
             },

             success:function(data){
             console.log("WooHoo Describe!");
             console.log(data);

              $('#descriptive').html("");
              $("#descriptive").append("<p class='title-word'>descriptive words</p>");

              if (data.length===0){
              $("#descriptive").append("Word cannot be found!");
              }

              else {
              data.forEach(function(element){
              $("#descriptive").append( element.word + "</br>" );
                });
              }
            }
      });
    }
