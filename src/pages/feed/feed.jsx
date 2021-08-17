import React from "react";
import { FeedDetails } from "../../components/feed-details/feed-details";
import FeedStyles from "./feed.module.css";

export const feedOrder = [
  {
    id: "60d3b41abdacab0026a733c8",
    name: "Филе Люминесцентного тетраодонтимформа",
    amount: 2,
    price: 300,
  },
  {
    id: "60d3b41abdacab0026a733cb",
    name: "Биокотлета из марсианской Магнолии",
    amount: 1,
    price: 300,
  },
  {
    id: "60d3b41abdacab0026a733c8",
    name: "Соус с шипами Антарианского плоскоходца",
    amount: 2,
    price: 300,
  },
  {
    id: "60d3b41abdacab0026a733cb",
    name: "Биокотлета из марсианской Магнолии",
    amount: 1,
    price: 300,
  },
  {
    id: "60d3b41abdacab0026a733c8",
    name: "Филе Люминесцентного тетраодонтимформа",
    amount: 2,
    price: 300,
  },
  {
    id: "60d3b41abdacab0026a733cb",
    name: "Биокотлета из марсианской Магнолии",
    amount: 1,
    price: 300,
  },
  {
    id: "60d3b41abdacab0026a733c8",
    name: "Филе Люминесцентного тетраодонтимформа",
    amount: 2,
    price: 300,
  },
  {
    id: "60d3b41abdacab0026a733cb",
    name: "Биокотлета из марсианской Магнолии",
    amount: 1,
    price: 300,
  },
];

export const Feed = () => {
  // const { orderId } = useParams();

  return (
    <div className={FeedStyles.feed}>
      <FeedDetails order={feedOrder} />
    </div>
  );
};
