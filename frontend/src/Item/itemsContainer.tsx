import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { IItemData, IItemsData } from "./types";

import { Box1 } from "./types";
import ItemDetail from "./itemList";

const ProductContext = React.createContext({});

const ItemsContainer = () => {
  const [products, setProducts] = useState({});

  const appendProducts = (value: {}) => {
    setProducts({ ...products, ...value });
  };

  console.log(`products`, products);

  return (
    <ProductContext.Provider value={products}>
      <div className="flex">
        <div className="w-50">
          {Box1.resources.map(element => (
            <div key={element.id}>
              <ItemDetail {...element} appendProducts={(value: any) => appendProducts(value)} />
            </div>
          ))}
        </div>
        <div className="w-50">
          {/* {Box1.results.map(element => (
            <div key={element.id}>
              <ItemDetail {...element} appendProducts={(value: any) => appendProducts(value)} />
            </div>
          ))} */}
        </div>
      </div>
    </ProductContext.Provider>
  );
};

export default ItemsContainer;
