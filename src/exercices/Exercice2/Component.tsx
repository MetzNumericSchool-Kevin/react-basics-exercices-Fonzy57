import BoutonAppelArchibald from "./BoutonAppelArchibald";

const Exercice2 = () => {
  return (
    <section id="exercice2">
      <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
      <BoutonAppelArchibald
        quandSorcierRepond={function () {
          alert("🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !");
        }}
      />
    </section>
  );
};

export default Exercice2;
