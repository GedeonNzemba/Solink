import React from 'react'
import Lottie from "lottie-react";
import loader from "../images/loader.json";

const Loader = () => {
  return <Lottie animationData={loader} className="grid h-screen place-items-center" />
}

export default Loader