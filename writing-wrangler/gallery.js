function makeHTML(data){
  var htmlString = "<ul>"
  data.forEach(function(d){
    htmlString += "<li>" + d.doc.text + "</li>";
  });
  htmlString += "</ul>";

   $("#uploadedText").append(htmlString);
};

function getAllData(){
 $.ajax({
   url: '/api/all',
   type: 'GET',
   dataType: "json",
   error: function(error){
     console.log("Oh no...");
     console.log(error);
   },
   success: function(data){
     console.log('WooHoo!');
     console.log(data);
     // getAllData();
     makeHTML(data);
   }
 });
}

$(document).ready(function(){
  getAllData();
 });
