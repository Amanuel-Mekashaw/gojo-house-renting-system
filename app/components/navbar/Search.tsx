"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex flex-row items-center justify-between">
        {/* Anywhere box */}
        <div className="px-6 text-sm font-semibold">Anywhere</div>

        {/* Anyweek box */}
        <div
          className="
                hidden 
                flex-1 
                border-x-[1px] 
                px-6 
                text-center
                text-sm 
                font-semibold 
                sm:block
            "
        >
          Any week
        </div>

        <div
          className="
                text-grey-500
                flex
                flex-row
                items-center
                gap-3
                pl-6
                pr-2
                text-sm
        "
        >
          {/* Add Guest Box */}
          <div className="hidden sm:block">Add Guest</div>

          {/* Search icon */}
          {/* TODO Change the color of the search icon */}
          <div className="rounded-full bg-purple-500 p-2 text-white">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
