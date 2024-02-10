import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

type ShowMoreProps = {
  limit: number;
  isNext: boolean;
};

const ShowMore = ({ limit, isNext }: ShowMoreProps) => {
  // If there is "?" in the url parameter, use >> useSearchParams; otherwise use >> useparams.
  const [params, setParams] = useSearchParams();

  // Adds 5 to the limit parameter in the url (url deki limit parametresine 5 ekler)
  const handleNavigate = () => {
    // calculate new limit
    const newLimit: number = limit + 5;
    // add a new parameter without deleting other parameters
    params.set("limit", String(newLimit));
    // update the url
    setParams(params);
  };
  return (
    <div className="w-full flex-center gap-5 my-10">
      {isNext && (
        <CustomButton title="Show More" handleClick={handleNavigate} />
      )}
    </div>
  );
};

export default ShowMore;
