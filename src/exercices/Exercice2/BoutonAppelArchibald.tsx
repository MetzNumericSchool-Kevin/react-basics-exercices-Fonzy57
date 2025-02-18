interface BoutonAppelArchibaldProps {
  quandSorcierRepond: () => void;
}

const BoutonAppelArchibald = ({
  quandSorcierRepond,
}: BoutonAppelArchibaldProps) => {
  return (
    <button className="btn btn-primary" onClick={quandSorcierRepond}>
      🛎️ Appeler Archibald
    </button>
  );
};

export default BoutonAppelArchibald;
