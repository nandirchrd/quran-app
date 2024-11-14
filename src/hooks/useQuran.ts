import React, { useEffect, useState } from "react";
import { getQuran } from "../api";

const useQuran = (
  surah?: number
): [
  { data: [] | null; isLoading: boolean; error: string },
  React.Dispatch<React.SetStateAction<[] | null>>
] => {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (surah) {
          const res = await getQuran({ surah });
          setData(res.data.data);
        } else {
          const res = await getQuran({ surah: undefined });
          setData(res.data.data);
        }
      } catch (err: any) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [surah]);

  return [{ data, error, isLoading }, setData];
};

export default useQuran;
