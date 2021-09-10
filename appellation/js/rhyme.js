//function for rhyming words

function getRhyme(word) {

        var linkRhyme = "https://api.datamuse.com/words?rel_rhy=" + word + "&max=10";

        $.ajax ({
           url: linkRhyme,
           type:"GET",
           dataType: "json",

           error:function(err){
           //console.log("Oh no! Definition Error");
           //console.log(err);
           },

           success:function(data){
           console.log("WooHoo Rhyme!");
           console.log(data);

        $('#rhyme').html("");
        $("#rhyme").append("<p class='title-word'>rhyming words</p>");

        if  (data.length===0){
            $("#rhyme").append("Word cannot be found!");
        }

        else {
            data.forEach(function(element){
            $("#rhyme").append( element.word + "</br>" );
          });
        }
  }
});
}
