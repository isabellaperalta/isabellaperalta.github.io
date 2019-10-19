$(document).ready(function(){

  console.log ("The document is ready!");

  $("#theInput").keyup(function(event){
    if(event.keyCode == 13){
        $("#theButton").click();
    }
  });

    $("#theButton").click(function(){

        //Grab input box value
        var theWord = $('#theInput').val();
        console.log(theWord);
        if ( theWord!="" ){

        getDefinition(theWord);
        getExamples(theWord);
        getDatamuse(theWord);
        getRelate(theWord);
        getRhyme(theWord);
        getWiki(theWord)
        }

      else {
            alert("please type a word!");
           }
      });
});
