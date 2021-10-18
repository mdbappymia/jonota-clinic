import React, { createContext } from "react";
import useData from "../hooks/useData";
import useFirebase from "../hooks/useFirebase";
// context definition and export
export const ContextApi = createContext();
const AllProvider = ({ children }) => {
  const dataContext = useData();
  const authContext = useFirebase();
  // get all value and destructured and pass the value of context
  const allContext = { ...dataContext, ...authContext };
  return (
    <ContextApi.Provider value={allContext}>{children}</ContextApi.Provider>
  );
};

export default AllProvider;
