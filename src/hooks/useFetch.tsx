import { useCallback, useState } from "react";

const useFetch = () => {
  const [process, setProcess] = useState('loading')
  const request = useCallback(
    async (url: string, headers = { "Content-type": "application/json" }) => {
      setProcess('loading')
      try {
        const res = await fetch(url, { headers });
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        const data = await res.json();
        return data;
      } catch (e: unknown) {
        setProcess('error')
        if (e instanceof Error) {
          throw e;
        }
      }
    },
    []
  );

  return { request, process, setProcess };
};

export default useFetch;
