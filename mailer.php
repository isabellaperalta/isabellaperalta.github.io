<?php
if(isset($_POST['submit'])) {
$to = "isabellafperalta@gmail.com";
$subject = "New One Thing Response!";

// data the visitor provided
$name_field = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$comment_field = filter_var($_POST['comment'], FILTER_SANITIZE_STRING);

//constructing the message
$body = " Answer: $name_field\n\n Location: $comment_field\n\n";

// ...and away we go!
mail($to, $subject, $body);

// redirect to confirmation
header('Location: confirmation.htm');
} else {
// handle the error somehow
}
?>
