// Callback function
// Calculates the area of a rectangle
const areaOfRectangle = (l, w) => {
  return l * w;
};

// Higher-order function
// Takes a callback function (areaOfRectangle) and height (h)
// Uses the callback to calculate volume
const volumeOfRectangle = (areaCallback, l, w, h) => {
  return areaCallback(l, w) * h;
};

// Function call
console.log(volumeOfRectangle(areaOfRectangle, 5, 4, 3)); // Output: 60
