import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/"  />
     </Routes>
   </div>
 );
};
 
export default App;

