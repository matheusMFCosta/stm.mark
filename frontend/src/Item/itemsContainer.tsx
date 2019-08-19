import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { IItemData, IItemsData } from "./types";

import { Box1 } from "./types";
import ItemDetail from "./itemList";

const ItemsContainer = () => {
  return (
    <div className="flex">
      <div className="w-50">
        {Box1.resources.map(element => (
          <div key={element.id}>
            <ItemDetail {...element} />
          </div>
        ))}
      </div>
      <div className="w-50">
        {Box1.results.map(element => (
          <div key={element.id}>
            <ItemDetail {...element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsContainer;
