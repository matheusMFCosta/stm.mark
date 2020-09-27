import * as bodyParser from "body-parser";
import * as express from "express";
import axios from "axios";
import { authorize } from "../config";

const router = express.Router();

router.route("/:id").get(async (_, response) => {
  try {
    const itemId = encodeURIComponent(_.params.id);

    const axiosResponse = await axios.get(
      `https://steamcommunity.com/market/itemordershistogram?country=BR&language=brazilian&currency=1&item_nameid=${itemId}&two_factor=0`
    );
    const items = axiosResponse.data;

    response.status(200).send({
      price: items.highest_buy_order,
      itemId: _.params.id,
      assetId: 0,
      url: 0,
    });

    return;
  } catch (e) {
    response.status(500).send({});
  }
});

router.route("/").post(bodyParser.json(), async (request, response) => {
  return response.status(200).json({ items: [] });
});

export default router;
