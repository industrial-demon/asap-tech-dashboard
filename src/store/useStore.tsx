import { useContext } from "react";
import { RootSoreContext } from "~/providers/store-provider";


export const useStore = () => {
    const ctx = useContext(RootSoreContext);
  
    if (ctx === null) {
      throw new Error(
        "You have forgotten to wrap your root component with RootStoreProvider"
      );
    }
    return ctx;
  };
  