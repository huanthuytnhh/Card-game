import carList from "@/Shared/FakeData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearchedCar() {
  console.log(carList);
  return (
    <div className="mx-24">
      <h2>Most Searched Car</h2>
      <Carousel>
        <CarouselContent>
          {carList.map((car, idx) => (
            <CarouselItem key={idx} className="basis-1/4">
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
