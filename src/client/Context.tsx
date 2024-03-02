import React, { useContext, useState } from "react";

export interface Context {
  name: string;
  setName: (val: string) => void;
}
const defaultVal = {
  name: "",
  setName: () => {},
} as Context;

const context = React.createContext(defaultVal);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: any }) => {
  const [name, setName] = useState(defaultVal.name);
  return <Provider value={{ name, setName }}>{children}</Provider>;
};

export const useAppContext = () => useContext(context);




interface ProductsContextType {
  ssProducts: any[]; // Replace 'any' with a more specific type if possible
  setSSproducts: React.Dispatch<React.SetStateAction<any[]>>; // Again, replace 'any' with a specific type
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductsContext = React.createContext<ProductsContextType>({
  ssProducts: [],
  setSSproducts: () => {},
  cartCount: 0,
  setCartCount: () => {},
});