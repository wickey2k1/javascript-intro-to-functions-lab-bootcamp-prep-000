var uppercase, lowercase;

function shout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}
function whisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
}

function logShout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  console.log(uppercase);
}
function logWhisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  console.log(lowercase);
}
function sayHiToGrandma(string) {
  if (string.toLowerCase === string) {
    console.log ("I can't hear you!");
  } else if (string === uppercase) {
    console.log ("YES INDEED!");
  } else {
    console.log ("I love you, too.");
  }
}





