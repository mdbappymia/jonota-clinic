import { useContext } from "react";
import { ContextApi } from "../contexts/AllProvider";

const useRent = () => {
  return useContext(ContextApi);
};

export default useRent;
