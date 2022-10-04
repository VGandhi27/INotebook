import React from "react";

import Notes from "./Notes";

const Home = (props) => {
  const {showAlert}=props;
  return (
    <>
      <div className="container my-2">
         
         <div className="container my-2"> <Notes  showAlert={showAlert}/></div>
        
      </div>
    </>
  );
};

export default Home;
