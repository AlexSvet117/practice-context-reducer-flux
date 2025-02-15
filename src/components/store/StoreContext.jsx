import React, {createContext, useReducer} from 'react'
import { storeReducer } from './storeReducer';
import { initialStore } from './initialStore';

export const StoreContext = createContext();

export function StoreProvider({children}) {


    const [store, dispatch ] = useReducer(storeReducer, initialStore())
  
return (
      <StoreContext.Provider value ={[store, dispatch]}>
      {children}
      </StoreContext.Provider>
  )
}

export default StoreContext
