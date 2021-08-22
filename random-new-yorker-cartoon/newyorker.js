$("#theButton").click(function(){
  fetchDataAndDisplay();
});

function fetchDataAndDisplay(){
  $.ajax({
    url:"https://www.newyorker.com/cartoons/random/randomAPI1",
    method:"GET",
  }).done(function(data){

    var str = '';
    var url = '';

    url += data[0].src;
    str += data[0].caption+'</div>';

    $(".image").attr("src",url);
    $(".image").load(function() {

      $(".display-data").empty();
      $(".display-data").append(str);
    });
  })
}
