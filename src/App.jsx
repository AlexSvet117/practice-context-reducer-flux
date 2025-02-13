import PatentComponent from './components/contextPractice/PatentComponent';
import Logo from './components/Logo';
import { createContext, useState } from 'react';

// create a context
// it is outslide of the component function
// ideally in a separeate file
export const SomeContext = createContext()

function App() {

  const [someData, setSomeData] = useState(2025)




  return (
    <div className='p-3 border border-4 border-danger'>
    <h5>App Component - state is here {someData}</h5>
      {/* <SomeContext.Provider value={[someData, setSomeData]}> // array */}
      <SomeContext.Provider value={{someData, setSomeData}}> 
        <PatentComponent />
      </SomeContext.Provider>
      
    </div>
  );
}

export default App;
