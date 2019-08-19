import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { IItemData, IItemsData, IItemDetail } from "./types";
import { element } from "prop-types";

interface ItemListProps {}

const ItemDetail = ({ img, id, type }: { img: string; id: string; type: string }) => {
  const [itemData, setItemData] = useState<Partial<IItemData>>({});
  useEffect(() => {
    axios.get(`/api/getItemData/${id}`).then(res => {
      console.log(res.data);
      setItemData(res.data);
    });
  }, [id]);

  const itemValue: number = parseInt(itemData.highest_buy_order || "0,00", 10) / 100.0;
  const itemRessel = itemValue * 1.25;

  return (
    <div className="flex w-100">
      <div className="w13 h13">
        <img src={img} alt="" />
      </div>
      <span>
        <span>
          Price: {itemData.price_prefix}
          {itemValue.toFixed(2)}
        </span>
        <span className="pl6">
          Ressel: {itemData.price_prefix}
          {itemRessel.toFixed(2)}
        </span>
        <span className="pl6">Status {type} </span>
      </span>
    </div>
  );
};

const ItemListElement: React.SFC<IItemsData> = ({ assetId, itemId, url, price }) => {
  const [floatValue, setFloatValue] = useState<string>("");
  const itemValue: number = parseInt(price || "0,00", 10) / 100.0;
  useEffect(() => {
    const floatUrl: string = `/api/getItemData/floatValue/?m=${itemId}&a=${assetId}&d=${url}`;
    axios.get(floatUrl).then(res => {
      console.log(res.data);
      setFloatValue(res.data.iteminfo.floatvalue);
    });
  }, [assetId, itemId, url]);
  return (
    <div className="flex w-100">
      1 - value: {itemValue} float Value: {floatValue}
    </div>
  );
};

const ItemList: React.SFC<IItemDetail> = ({ id, img, name, type }) => {
  const [itemsData, setItemsData] = useState<IItemsData[]>([]);

  useEffect(() => {
    axios.get(`/api/getItemsData/${name}`).then(res => {
      console.log(res.data);
      setItemsData(res.data);
    });
  }, [name]);

  return (
    <div className="w-100 flex flex-column">
      <div className="w-100 bg-muted-2 flex">
        <ItemDetail img={img} id={id} type={type} />
      </div>
      {/* {itemsData.map((element: IItemsData) => (
        <div key={element.url}>
          <ItemListElement price={element.price} assetId={element.assetId} itemId={element.itemId} url={element.url} />
        </div>
      ))} */}
    </div>
  );
};

export default ItemList;
