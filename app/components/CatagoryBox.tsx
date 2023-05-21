"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CatagoryBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CatagoryBox: React.FC<CatagoryBoxProps> = ({
  label,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    // define empty query into object not string
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    // Spread the current query text and
    // add catagory label on it to update the result
    const updatedQuery: any = {
      ...currentQuery,
      catagory: label,
    };

    // if catagory is selected remove it from the query
    if (params?.get("catagory") === label) {
      delete updatedQuery.catagory;
    }

    // this code generates the new url path name string
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        cursor-pointer 
        flex-col
        items-center 
        justify-center  
        gap-2 
        border-b-2 
        p-3 
        transition 
        hover:text-neutral-800
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}

      `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CatagoryBox;
