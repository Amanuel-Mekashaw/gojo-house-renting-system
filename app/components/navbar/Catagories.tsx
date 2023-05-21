"use client";

import React from "react";
import Container from "../Container";
import { BiBuildingHouse } from "react-icons/bi";
import {
  MdOutlineVilla,
  MdApartment,
  MdAddHomeWork,
  MdVilla,
} from "react-icons/md";

import { TbBeach, TbMountain } from "react-icons/tb";
import { GiForest } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import IoLux, { IoDiamond } from "react-icons/io5";

import CatagoryBox from "../CatagoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const catagories = [
  {
    label: "River",
    icon: TbBeach,
    description: "This property is near to the river",
  },
  {
    label: "Appartment",
    icon: MdApartment,
    description: "This property is an Appartment House",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is a Modern house",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is close to the Country side",
  },
  {
    label: "Condo",
    icon: BiBuildingHouse,
    description: "This property is condominium",
  },
  {
    label: "Guesthouse",
    icon: MdAddHomeWork,
    description: "This property is Guest House",
  },
  {
    label: "Villa",
    icon: MdVilla,
    description: "This property is Guest House",
  },
  {
    label: "Luxury",
    icon: IoDiamond,
    description: "This property is Luxurious",
  },
  {
    label: "Pool",
    icon: FaSwimmingPool,
    description: "This property Has Swimming pool!",
  },
  {
    label: "Forest",
    icon: GiForest,
    description: "This property is in a forest!",
  },
];

const Catagories = () => {
  const params = useSearchParams();

  const catagory = params?.get("catagory");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
            flex
            flex-row
            items-center 
            justify-between 
            overflow-x-auto 
            pt-4
        "
      >
        {catagories.map((item) => (
          <CatagoryBox
            key={item.label}
            label={item.label}
            selected={catagory === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Catagories;
