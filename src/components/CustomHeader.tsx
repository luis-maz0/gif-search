interface Props {
  titulo: string;
  descripcion: string;
}

export const CustomHeader = ({ titulo, descripcion }: Props) => {
  return (
    <header>
      <h1> {titulo}</h1>
      <p>{descripcion}</p>
    </header>
  );
};
