import { useContext } from "react";

import { IProps } from "../../types/interfaces";
import { Item, Loading } from "..";
import { SearchContext } from "../../contexts/searchContext";

const Items: React.FC<IProps["Items"]> = ({ data, error, isLoading }) => {
  const [search] = useContext(SearchContext);

  if (search) {
    data = data.filter(
      data => data.asma.id.short.search(new RegExp(`^${search}`, "i")) !== -1
    );
  }

  return (
    <section>
      <div className="container flex mx-auto flex-col gap-1 px-4 text-xs">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <h1 className="text-center">{error}</h1>
        ) : (
          data.map(item => (
            <Item
              key={item.number}
              asma={item.asma}
              ayahCount={item.ayahCount}
              number={item.number}
              type={item.type.en}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Items;
