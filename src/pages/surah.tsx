import { useParams } from "react-router-dom";

import { Navbar, Surah as ComponentSurah } from "../components";

const Surah = () => {
  const { surah = "" } = useParams();

  return (
    <div>
      <Navbar back={true} />
      <ComponentSurah surah={surah} />
    </div>
  );
};

export default Surah;
