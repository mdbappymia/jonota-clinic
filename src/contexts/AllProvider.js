import React, { createContext } from "react";
import useData from "../hooks/useData";
import useFirebase from "../hooks/useFirebase";

export const ContextApi = createContext();
const AllProvider = ({ children }) => {
  const dataContext = useData();
  const authContext = useFirebase();
  const allContext = { ...dataContext, ...authContext };
  return (
    <ContextApi.Provider value={allContext}>{children}</ContextApi.Provider>
  );
};

export default AllProvider;
