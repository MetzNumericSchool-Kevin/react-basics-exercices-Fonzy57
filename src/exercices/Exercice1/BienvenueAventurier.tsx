interface BienvenueAventurierprops {
  titre: string;
  texte: string;
}

const BienvenueAventurier = ({ titre, texte }: BienvenueAventurierprops) => {
  return (
    <>
      <h1>{titre}</h1>
      <p>{texte}</p>
    </>
  );
};

export default BienvenueAventurier;
