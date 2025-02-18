interface BoutonAppelArchibaldProps {
  quandSorcierRepond: (message) => void;
}

const BoutonAppelArchibald = (props: BoutonAppelArchibaldProps) => {
  const message = "🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !";

  return (
    <button
      className="btn btn-primary"
      onClick={function handleClick() {
        props.quandSorcierRepond(message);
      }}
    >
      🛎️ Appeler Archibald
    </button>
  );
};

export default BoutonAppelArchibald;
