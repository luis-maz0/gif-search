interface Props {
  busquedasPrevias: string[];
}
export const TagHistory = ({ busquedasPrevias }: Props) => {
  return (
    <section className="history-container">
      <h2>Busquedas previas</h2>
      <ul className="history-tags">
        { busquedasPrevias.map( (busquedaPrev) => {
            return <li key={busquedaPrev} className="tag">{busquedaPrev}</li>
        } ) }
      </ul>
    </section>
  );
};
