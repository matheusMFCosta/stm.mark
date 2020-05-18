import * as bodyParser from "body-parser";
import * as express from "express";
import axios from "axios";
import { authorize } from "../config";

const router = express.Router();

router.route("/:id").get(async (_, response) => {
  const itemName = encodeURIComponent(_.params.id);
  const itemData = await axios.get(`https://steamcommunity.com/market/listings/730/${itemName}?key=756645EFF7F49FC05AFA9AE79B83B98C`);

  const lines = itemData.data.split("\n");
  for (const key of lines) {
    if (key.includes("var g_rgListingInfo")) {
      const itemsData = JSON.parse(
        key
          .split(" = ")[1]
          .trim()
          .slice(0, -1)
      );

      const items = Object.keys(itemsData).map(element => ({
        price: itemsData[element].price,
        itemId: element,
        assetId: itemsData[element].asset.id,
        url: itemsData[element].asset.market_actions[0].link.split("%D")[1],
      }));

      response.status(200).send(items);

      return;
    }
  }

  return response.status(200).send(itemData.data);
});

router.route("/").post(bodyParser.json(), async (request, response) => {
  return response.status(200).json({ items: [] });
});

export default router;

