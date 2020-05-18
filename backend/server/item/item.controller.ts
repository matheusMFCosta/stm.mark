import * as bodyParser from "body-parser";
import * as express from "express";
import axios from "axios";
import { authorize } from "../config";

const router = express.Router();

router.route("/floatValue").get(async (_, response) => {
  const itemData = await axios.get(`https://api.csgofloat.com/?${new URLSearchParams(_.query).toString()}`);

  return response.status(200).send(itemData.data);
});

router.route("/:id").get(async (_, response) => {
  // const itemId = encodeURIComponent(_.params.id);
  // const itemData = await axios.get(
  //   `https://steamcommunity.com/market/itemordershistogram?country=BR&language=english&currency=7&item_nameid=${itemId}&two_factor=0`
  // );
  // return response.status(200).send(itemData.data);
});

router.route("/").post(bodyParser.json(), async (request, response) => {
  return response.status(200).json({ items: [] });
});

export default router;
