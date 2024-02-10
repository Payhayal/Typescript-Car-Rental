import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CustomFilter from "../components/CustomFilter";
import { fuels, years } from "../constants";

const MainPage = () => {
  const [params] = useSearchParams();
  // We determine the type of data we keep with "state" using generic
  const [cars, setCars] = useState<CarType[]>([]);

  const limit = Number(params.get("limit")) || 5;

  useEffect(() => {
    // urldeki butun parametrelerden bir obje olusturma (Creating an object from all parameters in the url)
    const paramsObj = Object.fromEntries(params.entries());
    // console.log(paramsObj);

    fetchCars(paramsObj)
      .then((data: CarType[]) => setCars(data))
      .catch((err) => console.log(err));
  }, [params]);

  // is data empty?
  const isDataEmpty = cars.length < 1 || !cars;

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        {/* title */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Rental</h1>
          <p>Book the perfect car!</p>
        </div>
        {/* filter section */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel Type" options={fuels} />
            <CustomFilter title="Year of Production" options={years} />
          </div>
        </div>
        {/* list of cars */}
        {isDataEmpty ? (
          <div className="home__error-container">
            <h2> Choose the best car for you! </h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((data, key) => (
                <Card key={key} car={data} />
              ))}
            </div>
            <ShowMore limit={limit} isNext={limit < 30} />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
