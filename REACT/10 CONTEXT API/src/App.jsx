import { createContext } from 'react';
import A from './A.jsx'
import React from 'react';


const NameContext = createContext();
function App() {
 
  const Name = 'Sahil Khola'
  return (
    <>
     <NameContext.Provider value = {Name}>
    <A/>
     </NameContext.Provider>

    </>
  )
}

export default App
export {NameContext};