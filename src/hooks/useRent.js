import { useContext } from "react";
import { ContextApi } from "../contexts/AllProvider";

// this is the function that return all necessaty thing using context
const useRent = () => {
  return useContext(ContextApi);
};

export default useRent;
