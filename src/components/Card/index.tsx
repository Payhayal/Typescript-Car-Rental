import { useState } from "react";
import { CarType } from "../../types";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils";

interface ICardProps {
  car: CarType;
}

const Card = ({ car }: ICardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      {/*car name */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      {/* price */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[16px] font-semibold">$</span>
        {Math.round(Math.random() * 212) + 115}
        <span className="text-[16px] font-medium self-end">/day</span>
      </p>
      {/* picture */}
      <div className="relative w-full h-40 my-3 object-contain">
        <img
          className="w-full h-full object-contain"
          src={generateImage(car)}
          alt="car-pic"
        />
      </div>
      {/* carInfo bottom */}
      <div className="w-full mt-2 flex relative">
        <div className="group-hover:invisible mt-2 w-full flex justify-between text-gray">
          <CarInfo
            title={car.transmission === "a" ? "Automatic" : "Manual"}
            icon="./steering-wheel.svg"
          />
          <CarInfo title={car.drive?.toUpperCase()} icon="./tire.svg" />
          <CarInfo title={car.city_mpg + "MPG"} icon="./gas.svg" />
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Learn More"
            designs="w-full py-[16px]"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {/* Detail Modal */}
      <DetailModal
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
        car={car}
      />
    </div>
  );
};

export default Card;
