import React from "react";
import { NameContext,Name2Context } from "./App";

const Third = () => {
  return (
    <NameContext.Consumer>
      {(val) => {
        return (
            <Name2Context.Consumer>
                {
                    (val2)=>{
                        return <h1> {val} {val2} </h1>;
                    }
                }
            </Name2Context.Consumer>
        )
      }}
    </NameContext.Consumer>
  );
};

export default Third;
