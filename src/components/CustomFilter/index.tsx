import Select from "react-select";
import { OptionType } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type FilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: FilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();
  // console.log(selected);
  useEffect(() => {
    // Specify the name to be added to the url (url`ye eklenecek ismi belirle)
    const key = title === "Fuel Type" ? "fuel" : "year";

    if (selected?.value) {
      // add url if there is value (değer varsa url ekle)
      params.set(key, selected.value);
    } else {
      // If there is no value, delete the old value in the url (değer yoksa url`deki eski değeri sil)
      params.delete(key);
    }
    // updates URL
    setParams(params);
  }, [selected]);
  return (
    <div>
      <Select
        onChange={(e: OptionType | null) => setSelected(e)}
        options={options}
        placeholder={title}
        className="text-black min-w-[100px]"
      />
    </div>
  );
};

export default CustomFilter;
