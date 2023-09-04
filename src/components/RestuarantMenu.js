import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useRestuarantMenu from "../utils/useRestuarantMenu";
const RestuarantMenu = () => {
  const { id } = useParams();
  const menu= useRestuarantMenu(id);
  function custom(msg) {
    return console.log(msg);
  }
custom("inn")
  const resName = menu?.data?.cards[0]?.card?.card?.info?.name;
  const avg = menu?.data?.cards[0]?.card?.card?.info?.avgRatingString;
  const cuisine = menu?.data?.cards[0]?.card?.card?.info?.cuisines;
  const totalRatingsString =
    menu?.data?.cards[0]?.card?.card?.info?.totalRatingsString;

  return (
    <div className="flex_MEnu">
      <div>
        <h1> {resName}</h1>
        <p>{cuisine?.join(",")}</p>
      </div>
      <div>
        <h1>{avg}</h1>
        <p>{totalRatingsString}</p>
      </div>
    </div>
  );
};

export default RestuarantMenu;
