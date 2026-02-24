import type { FC } from "react";

interface Props {
  previousSearches: string[];
  onTagClick: (search: string) => void;
}

export const HistoryTags: FC<Props> = ({ previousSearches, onTagClick }) => {
  return (
    <section className="history-container">
      <h2>Previous searches</h2>
      <ul className="history-tags">
        {previousSearches.map((search) => {
          return (
            <li
              onClick={() => {
                onTagClick(search);
              }}
              key={search}
              className="tag"
            >
              {search}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
