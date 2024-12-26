import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {}
});

function FavoritesContextProvider({ children }) {
   const [favoriteMealIds, setFavoriteMealIds] = useState([]);

   const addFavorite = mealId => {
      setFavoriteMealIds(prevState => [...prevState, mealId]);
   };

   const removeFavorite = mealId => {
      setFavoriteMealIds(prevState => prevState.filter(id => id !== mealId));
   };

   const contextValue = {
      ids: favoriteMealIds,
      addFavorite,
      removeFavorite
   };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
