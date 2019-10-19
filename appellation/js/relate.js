//function for related words

function getRelate(word) {

      var linkRelate = "https://api.datamuse.com/words?rel_trg=" + word + "&max=10";

      $.ajax ({
         url: linkRelate,
         type:"GET",
         dataType: "json",

         error:function(err){
         //console.log("Oh no! Definition Error");
         //console.log(err);
         },

         success:function(data){
         console.log("WooHoo Relate!");
         console.log(data);

          $('#relate').html("");

          $("#relate").append("<p class='title-word'>related words</p>");

          if  (data.length===0){
              $("#relate").append("Word cannot be found!");
          }

          else {
              data.forEach(function(element){
              $("#relate").append(element.word + "</br>" );
          });
      }
    }
  });
}
