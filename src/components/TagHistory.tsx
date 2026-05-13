interface Props {
  busquedasPrevias: string[];
  onTagClick: (query: string) => void;
}

export const TagHistory = ({ busquedasPrevias, onTagClick }: Props) => {
  return (
    <section className="history-container">
      <h2>Busquedas previas</h2>
      <ul className="history-tags">
        {busquedasPrevias.map((busquedaPrev) => {
          return (
            <li 
              key={busquedaPrev} 
              className="tag"
              onClick={() => onTagClick(busquedaPrev)}
            >
              {busquedaPrev}
            </li>
          );
        })}
      </ul>
    </section>
  );
};