import React from "react";
import { useParams } from "react-router-dom";

export const Feed = () => {
  const { feedId } = useParams();

  return <div>Feed</div>;
};
