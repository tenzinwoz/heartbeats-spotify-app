//Function to store item in local storage
export const setItemInLocalStoroage = (name, value) => {
  localStorage.setItem(name, value);
};

//Function to get item in local storage
export const getItemFromLocalStoroage = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

//Function to get item in local storage
export const removeItemFromLocalStoroage = (name) => {
  localStorage.removeItem(name);
};

//Calculates user mood based on values 0-10
export const getMood = (number) => {
  if (number <= 2) {
    return "Sad";
  }
  if (number <= 5 && number > 2) {
    return "Calm";
  }
  if (number <= 8 && number > 5) {
    return "Energetic";
  }
  if (number > 8) {
    return "Happy";
  }
};
