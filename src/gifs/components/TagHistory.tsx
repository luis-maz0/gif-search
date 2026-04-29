interface Props {
  busquedasPrevias: string[];
}
export const TagHistory = ({ busquedasPrevias }: Props) => {
  return (
    <section className="history-container">
      <h2>Busquedas previas</h2>
      <ul className="history-tags">
        {busquedasPrevias.map((busqueda) => {
          return (
            <li key={busqueda} className="tag">
              {busqueda}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
