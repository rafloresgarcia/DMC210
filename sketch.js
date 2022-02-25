// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "waiting...";
let message = '';

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/ro5DO0PDP/';

// Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);

  // Start classifying (will listen to mic by default)
  classifyAudio();
}

// classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0)
  	frameRate(1);
  // A low framerate allows for the message to be read at a spoken speed

  // Draw the label
textSize(32);
  textAlign(CENTER, CENTER);
fill(255);
//text(label, width/2, height - 16);

  // Background noise does nothing
  let showtext = "";
  // Pick a message based on label
  if (label == "High") {
    showtext = "Yes ";
  } else if (label == "Mid") {
    showtext = "Maybe ";
  } else if (label == "Low") {
    showtext = "No ";
  }

  // Draw the message in the middle
  textSize(50);
  text(showtext, width / 2, height / 2);
  
// Allows each sound to be recorded in a new variable
  message += showtext;

// Draw the subtitles in the bottom
  textSize(32);
  textAlign(RIGHT, CENTER);
fill(255);
text(message, width/2, height - 16);
  
}

// Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}
