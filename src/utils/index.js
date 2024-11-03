import toast from "react-hot-toast";

// get all coffes from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};

// add a coffee to local storage
const addFavourite = (coffee) => {
  //Firstly,get all coffe data which is previously saved
  const favorites = getAllFavorites();
  const isExist = favorites.find((item) => item.id == coffee.id);
  if (isExist) return toast.error("This is already Exist!");
  favorites.push(coffee);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully Added!!");
};

// remove a coffe from local storage
const removeFavorite = (id) => {
  // get all previously saved coffee data
  const favorites = getAllFavorites();
  const remaining = favorites.filter((coffee) => coffee.id != id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
};

export { addFavourite, getAllFavorites, removeFavorite };
