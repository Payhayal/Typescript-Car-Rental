import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactSelect from "react-select";
import { makes } from "../../constants";
import { OptionType } from "../../types";

type SearchProps = {
  styling: string;
};
// Second component in the same file (ayni dosyadaki 2. bilesen(component))
const SearchButton = ({ styling }: SearchProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [params, setParams] = useSearchParams();

  // updates URL (brand and model name)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make !== "" && model === "") {
      setParams({ make: make.toLowerCase() });
    } else if (make !== "" && model !== "") {
      setParams({
        make: make.toLowerCase(),
        model: model.toLowerCase(),
      });
    } else {
      alert("Please enter brand and model name");
    }
  };

  // ReactSelect kutuphanesi label ve value degerleri olan bir obje ile donduruldugunde gosteriyor select inputunu.
  // Bu yuzden diziyi map`le donup her bir eleman icin label ve value veriyoruz
  // Boylece string`den olusan diziyi (makes) >>> objelerden olusan label ve value degerine sahip bir diziye (options) cevirmis olduk
  const options: OptionType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );
  // {`useMemo` hook'u bir değeri hesaplamak ve bu değeri
  // bir sonraki render sırasında hesaplamadan önce
  // önbellekte saklamak için kullanılır
  // bu performanı arttırmada yardımcı olur
  // maaliyetli işlemler yapılıyorsa tercih edilmelidir
  // gereksiz yeniden hesaplamaların önüne geçer}

  //   console.log(makes);
  //   console.log(options);
  // console.log(make,model);

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item text-black">
        <ReactSelect
          onChange={(e: OptionType | null) => e && setMake(e.value)}
          options={options}
          className="w-full"
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img className="absolute ml-4" width={25} src="/model-icon.png" />
        <input
          type="text"
          placeholder="Ex:Civic"
          className="searchbar__input text-black rounded"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
