function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Have you ever", "Million dollars but", "I am", "When can you"];
  var body = ["touched a cow", "poked a rooster", "Iron Man", "sleep", "squirrels, squirrels, squirrels"];
  var end =["everywhere", "softly"];
  randIndex = randomUpTo(intro.length-1);
  sentence = intro[randIndex];
  randIndex = randomUpTo(body.length-1);
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo(end.length-1);
  sentence = sentence + " " + end[randIndex];
  document.getElementById('tweet').innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
