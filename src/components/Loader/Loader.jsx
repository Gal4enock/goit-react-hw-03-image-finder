import React from 'react';
import Loader from "react-loader-spinner";

const MyLoader = function () {
  return (
      <Loader
      type="Hearts"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
    />
    
    );
}
export default MyLoader;