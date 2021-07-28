function wordCount( val ){
    var wom = val.match(/\S+/g);
    return {
        words              : wom ? wom.length : 0,
    };
}


var textarea = document.getElementById("tArea");
var result   = document.getElementById("wordCount");

textarea.addEventListener("input", function(){
  var v = wordCount( this.value );
  result.innerHTML = (
      "<br>Words: "+ v.words
  );
}, false);
