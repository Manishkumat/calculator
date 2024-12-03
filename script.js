// Select the display element
const display = document.getElementById('display');

// Add number/operator to the display
function addToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Calculate square of a number
function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (error) {
    display.value = 'Error';
  }
}
function cube() {
    try {
      display.value = Math.pow(eval(display.value), 3);
    } catch (error) {
      display.value = 'Error';
    }
  }
  
