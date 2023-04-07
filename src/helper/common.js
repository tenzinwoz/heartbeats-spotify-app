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
