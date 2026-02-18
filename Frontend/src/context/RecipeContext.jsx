import { createContext, useEffect, useState } from "react";


export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://rasoihub-backend.onrender.com/recipes")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;





