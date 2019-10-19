var quotes = [
      'your face is like sunshine',
      'um, your outfit today? wow. just, wow.',
      'fyi, everyone has a crush on you',
      'you are better than unicorns and sparkles combined',
      'you are the stars. you are the galaxy.',
      'you are straight up magic',
      'you are fresher than lemonade',
      'you are everything good',
      'you are funnier than a viral cat video',
      'i am happy you exist',
      'a pizza should be named after you',
      'you make it rain rainbows',
      'you are so cool and i am not even mad about it',
      'you invented amazing',
      'i would trust you with my passwords',
      'your ideas matter',
      'you are cuter than a basket full of puppies',
      'even baby animals think you are cute',
      'you would be the person in the scary movie who survives',
      'you know who is wonderful? you.',
      'i love your ambition',
      'you make good choices',
      'you look like you could do well at chess',
]

function newQuote() {
  var randomNumber = Math.floor(Math.random()* (quotes.length));
  document.getElementById('message').innerHTML = quotes[randomNumber];
}
