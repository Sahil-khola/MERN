import React, { useEffect, useLayoutEffect } from "react";

const LayoutHook = () => {
  useEffect(() => {
    console.log("use Effect Part ");
  }, []);

  useLayoutEffect(() => {
    console.log("use Effect Part 2 ");
  }, []);
  useLayoutEffect(() => {
    console.log("use Effect Part 1 ");
  }, []);


  useEffect(() => {
    console.log("use Effect Part ");
  }, []);
  return (
    <div>
      <h3>UseLayout in React js </h3>
    </div>
  );
};

export default LayoutHook;
