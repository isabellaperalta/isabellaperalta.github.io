$(document).ready(function() {
    $(document).keydown(function(e) {
      var elid = $(document.activeElement).hasClass('tArea');
        if (e.keyCode === 8 && !elid) {
            return false;
        };
    });
});

$(document).ready(function() {
      $('#tArea').bind('copy paste cut',function(e) {
      e.preventDefault(); //disable cut,copy,paste
    });
  });

var timeDone = false;

 function saveData(obj){
	$.ajax({
		url: '/save',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(obj),
		error: function(resp){
			console.log("Oh no...");
			console.log(resp);
		},
		success: function(resp){
			console.log('WooHoo!');
			console.log(resp);
			// getAllData();
		}
	});
}

 function yourAlert () {
      if (timeDone == false) {
        document.getElementById('tArea').value = "";
        clearTimeout(timer);
        clearTimeout(counter);
        $('#time').empty();
        swal({
          type: 'error',
          text: 'You have not typed anything in 5 seconds!',
          showConfirmButton: false,
          timer: 2000
        }).then(function() {
        // Redirect the user
        window.location.href = "https://writing-wrangler.herokuapp.com/";
        });
      }
    };

// alert for five second pause
$('#tArea').keyup(function(){
    clearTimeout(timer);
    clearTimeout(counter);
    timer = setTimeout(yourAlert, 7000); // interval is set to 5s
      var fiveMinutes = 60 * 0.09,
      display = document.querySelector('#time');
      startTimer(fiveMinutes, display);
  });

var counter;

// timer for five second pause
function startTimer(duration, display) {
  if (timeDone) {
    clearTimeout(timer);
    clearTimeout(counter);
    $('#time').empty();
    return;
  }
    var timer = duration, minutes, seconds;
    counter = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ?  minutes : minutes;
        seconds = seconds < 10 ?  seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//////////////

var started = false;
$('#tArea').keydown(function(){
    clearTimeout(timer);
    clearTimeout(counter);
    $('#time').empty();
    if (!started){
      countdown(1);
      started = true;
      setTimeout(function() {
          $("#myButton").show();
          $("#myButton2").show();
       }, 63000);
          $("#myButton2").click(function(){
          console.log("Hello!");
          swal({
            type: 'success',
            title: 'Your text has been added!',
            showConfirmButton: false,
            timer: 1800
          }).then(function() {
          // Redirect the user
          window.location.href = "https://writing-wrangler.herokuapp.com/gallery";
          });
          var textToWrite = document.getElementById('tArea').value;
          var data ={
            text: textToWrite
          };
          saveData(data);
       });
    }
});

// global timer
var timeoutHandle;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {
                if(seconds < 1){
                  clearTimeout(timer);
                  clearTimeout(counter);
                  $('#time').empty();
                  $('#time').addClass('ded');
                  timeDone = true;
                  document.onkeydown = function (e) {
                    e.preventDefault();}
                  document.onclick = function (e) {
                    clearTimeout(timer);
                    clearTimeout(counter);
                    $('#time').empty();
                  }
                    swal({
                    title: 'Success!',
                    text: "You typed without stopping for 1 minute!",
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#F45653',
                    confirmButtonText: 'Woohoo!'
                  });
                }
            }
        }
      tick();
    }
