import { useCallback, useState } from "react";

const useFetch = () => {
  const [process, setProcess] = useState('')
  console.log(process)
  const request = useCallback(
    async (url: string, headers = { "Content-type": "application/json" }) => {
      
      try {
        const res = await fetch(url, { headers });
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        const data = await res.json();
        return data;
      } catch (e: unknown) {
        
        if (e instanceof Error) {
          setProcess(String(e))
          throw e;
        }
      }
    },
    []
  );

  return { request, process, setProcess };
};

export default useFetch;
