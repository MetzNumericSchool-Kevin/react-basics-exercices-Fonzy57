interface BienvenueAventurierprops {
  titre: string;
  texte: string;
}

const BienvenueAventurier = ({ titre, texte }: BienvenueAventurierprops) => {
  return (
    <section id="exercice1">
      <h1>{titre}</h1>
      <p>{texte}</p>
    </section>
  );
};

export default BienvenueAventurier;
