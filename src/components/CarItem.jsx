import React from "react";
import PropTypes from "prop-types";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
function CarItem({ car }) {
  return (
    <div className="rounded-xl bg-white border hover:shadow-xl cursor-pointer">
      <img
        className="rounded-t-xl w-full  h-50 object-cover"
        // w-full h-48 object-cover
        src={car?.image}
        alt="car image"
        width={300}
        height={250}
      />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{car?.name}</h2>
        <Separator />
        <div className="grid grid-cols-3  mt-5 ">
          <div className="flex flex-col items-center">
            {/* t= justify-items-center gap-4*/}
            <LuFuel className="text-lg" />
            <h2 className="text-center">{car.miles} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <BsFuelPumpDiesel className="text-lg" />
            <h2 className="text-center">{car.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiElectric className="text-lg" />
            <h2 className="text-center">{car.gearType}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between ">
          <h2 className="font-bold text-xl">${car.price}</h2>
          <h2 className="text-primary text-sm flex gap-2 items-center">
            View Details <MdOpenInNew />
          </h2>
        </div>
      </div>
    </div>
  );
}
CarItem.propTypes = {
  car: PropTypes.object,
};

export default CarItem;
