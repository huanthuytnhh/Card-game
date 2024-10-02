import Data from "@/Shared/Data";
import React from "react";

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-center mb-10 text-3xl">Browse By Type</h2>
      <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9  gap-6 px-20">
        {Data.Category.map((category, idx) => (
          <div
            key={idx}
            className="border rounded-xl items-center  p-3 flex flex-col hover:shadow-lg cursor-pointer border-1px"
          >
            <img
              src={category.icon}
              alt={category.name}
              width={35}
              height={35}
            />
            <h2 className="font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
