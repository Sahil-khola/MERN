import React from 'react'
import First from './First'
import { createContext } from 'react';

const NameContext = createContext();
const Name2Context = createContext();

const App = () => {
    const Name = 'Sahil Khola';
    const Name2 = ' Khola';
  return (
    <div>
        <NameContext.Provider value={Name}>
         <First/>
        </NameContext.Provider>
        <NameContext.Provider value={Name2}>
         <First/>
        </NameContext.Provider>
    </div>
  )
}

export default App
export {NameContext,Name2Context};
