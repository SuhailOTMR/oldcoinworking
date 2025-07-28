import React, {  useEffect } from "react";
import "./Loader.css";
import {  useLoading } from "../../context/loading-context";
import logoGif from "../../Common/loader/COIN_LOOTY_new_logo.gif";

const CoinLootyLoader = () => {


  
  const {isLoading} = useLoading()

  useEffect(()=>{
    console.log(isLoading)
  },[isLoading])
  if (isLoading === false) return null;

  return (
    <div className="loader">
      <div className="loader-content">
        <img src={logoGif} alt="Coin Looty Logo" className="logo" />
        <div className="loader_icon"></div>
      </div>
    </div>
  );
};

export default CoinLootyLoader;


