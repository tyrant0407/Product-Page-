import { createContext, useState } from "react";

export let MyStore = createContext();

export const MyContextProvider = ({ children }) => {

  return (
    <MyStore.Provider>
      {children}
    </MyStore.Provider>
  );
};