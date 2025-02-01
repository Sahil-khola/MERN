import React, { useContext } from "react";
import { NameContext } from "./App";

const Third = () => {
  const useCont = useContext(NameContext)
  return (
    <h1>Name : {useCont.Name} - {useCont.Name2}</h1>
  );
};

export default Third;
