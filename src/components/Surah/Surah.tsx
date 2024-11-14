import React, { useContext, useEffect, useState } from "react";
import { BsPlay, BsFillPlayFill } from "react-icons/bs";
import Playing from "../../assets/gif/playing.gif";
import axios from "axios";

import { SearchContext } from "../../contexts/searchContext";
import { IProps, IState } from "../../types/interfaces";
import Loading from "../Loading/Loading";
import Copyright from "../Copyright/Copyright";

const Surah: React.FC<IProps["Surah"]> = ({ surah }) => {
  const [data, setData] = useState<IState["Surah"]["data"] | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [prevURL, setPrevURL] = useState("");
  const [prevAudio, setPrevAudio] = useState<HTMLAudioElement>();
  const [toggleAudio, setToggleAudio] = useState<boolean>(true);
  const [audioEnded, setAudioEnded] = useState<boolean | undefined>(false);
  const [search, setSearch] = useContext(SearchContext);

  useEffect(() => {
    axios
      .get(`https://quran-endpoint.vercel.app/quran/${surah}`)
      .then(res => {
        setData(res.data.data);
        setLoading(false);
        console.log(res.data.data);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
    return () => setSearch("");
  }, [surah, setSearch]);

  const playAudio = (url: string) => {
    setPrevURL(url);
    if (url !== prevURL) {
      prevAudio?.pause();
      const audio = new Audio(url);
      audio?.play();

      const interval = setInterval(() => {
        // Cek apakah currentTime sudah sama atau lebih dari durasi audio
        if (audio.currentTime >= audio.duration) {
          setAudioEnded(true);
          clearInterval(interval);
        }
      }, 100);

      setAudioEnded(false);
      setToggleAudio(true);
      setPrevAudio(audio);
      return;
    }

    setToggleAudio(!toggleAudio);
    if (toggleAudio) {
      prevAudio?.pause();
      setAudioEnded(true);
    } else {
      prevAudio?.play();
      setAudioEnded(false);
    }
  };

  let filtered = data?.ayahs;
  if (search) {
    filtered = data?.ayahs.filter(data => `${data.number.insurah}` === search);
  }

  return (
    <section>
      <div className="container flex mx-auto flex-col gap-1 px-4 text-xs">
        {isLoading && !data ? (
          <Loading />
        ) : error ? (
          <h1 className="text-center">{error}</h1>
        ) : (
          <section>
            <header className="text-netral text-center bg-primary p-4 rounded-md">
              <div className="text-xl font-medium">
                <h1>{data?.number}</h1>
                <h1>{data?.asma.en.short}</h1>
                <span className="text-sm">{data?.asma.translation.en}</span>
              </div>
              <div className="text-xs">
                <span>
                  {data?.type.en} - {data?.ayahCount}{" "}
                  {data?.ayahCount === 1 ? "verse" : "verses"}
                </span>
              </div>
            </header>
            <div>
              {filtered?.map(ayah => (
                <div className="flex flex-col py-3" key={ayah.number.insurah}>
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex items-center justify-center bg-primary w-5 h-5 text-netral text-[0.5em] font-medium p-2 rounded-full">
                      {ayah.number.insurah}
                    </div>
                    <p className="text-right py-3 leading-relaxed">
                      {ayah.text.ar}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">{ayah.text.read}</p>
                    <p className="text-xs">{ayah.translation.en}</p>
                  </div>
                  <div className="flex items-center justify-between h-10">
                    <div className="mx-auto">
                      <span>
                        {!audioEnded &&
                        !toggleAudio &&
                        prevURL === ayah.audio.url ? (
                          "Paused"
                        ) : prevAudio &&
                          prevURL === ayah.audio.url &&
                          !audioEnded ? (
                          <img
                            alt="loading gif"
                            width={50}
                            style={{
                              mixBlendMode: "multiply",
                            }}
                            src={Playing}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {!toggleAudio && prevURL === ayah.audio.url ? (
                        <BsFillPlayFill
                          onClick={() => playAudio(ayah.audio.url)}
                          size={40}
                          cursor={"pointer"}
                        />
                      ) : (
                        <BsPlay
                          onClick={() => playAudio(ayah.audio.url)}
                          size={40}
                          cursor={"pointer"}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      {!isLoading && <Copyright />}
    </section>
  );
};

export default Surah;
