import { useEffect, useState } from "react";
import axios from "axios";

import { Copyright, Items, Navbar, Search } from "../components";

const Home = () => {
  const [quran, setQuran] = useState<[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://quran-endpoint.vercel.app/quran")
      .then(res => {
        setQuran(res.data.data);
        setLoading(false);

        console.log(res.data.data);
      })
      .catch(err => setError(err));
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Search />
      <Items data={quran} error={error} isLoading={isLoading} />
      {!isLoading && <Copyright />}
    </div>
  );
};

export default Home;
