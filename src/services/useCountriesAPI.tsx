import useFetch from "../hooks/useFetch";

const useCountriesAPI = () => {
  const { request, process, setProcess } = useFetch();

  const _base = "https://restcountries.com/v3.1/";

  const getAllCoutries = async () => {
    const res = await request(
      `${_base}all?fields=name,capital,flags,region,population`
    );
    return res;
  };

  const getSingleCountrie = async (name: string) => {
    let res = await request(`${_base}name/${name}?fullText=true`);
    return _transformSingleCountrie(res[0]);
  };

  const getSingleCountrieByName = async (name: string) => {
    const res = await request(`${_base}name/${name}`);
    return res;
  };
  const getCountriesByRegion = async (region: string) => {
    const res = await request(`${_base}region/${region}`);
    return res;
  };

  const _transformSingleCountrie = (data: any) => {
    return {
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName).map(
        (item: any) => item.common
      )[0],
      flags: data.flags.svg,
      population: data.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital[0],
      tld: data.tld.join(" "),
      languages: Object.values(data.languages).join(", "),
      currencies: Object.values(data.currencies)
        .map((item: any) => item.name)
        .join(", "),
      borders: data.borders,
    };
  };

  return {
    getAllCoutries,
    process,
    setProcess,
    getSingleCountrie,
    getSingleCountrieByName,
    getCountriesByRegion,
  };
};

export default useCountriesAPI;
