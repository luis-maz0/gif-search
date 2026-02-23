import type { FC } from "react";

interface Props {
  previousSearches: string[];
}

export const HistoryTags: FC<Props> = ({ previousSearches }) => {
  return (
    <section className="history-container">
      <h2>Previous searches</h2>
      <ul className="history-tags">
        {previousSearches.map((search) => {
          return <li key={search} className="tag">{search}</li>;
        })}
      </ul>
    </section>
  );
};
