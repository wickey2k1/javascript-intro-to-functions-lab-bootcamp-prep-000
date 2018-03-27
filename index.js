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



