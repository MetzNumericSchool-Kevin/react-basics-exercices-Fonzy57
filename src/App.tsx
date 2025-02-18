import "./App.css";

// COMPONENTS
import Exercice1 from "./exercices/Exercice1/Component";
import Exercice2 from "./exercices/Exercice2/Component";
import Exercice3 from "./exercices/Exercice3/Components";
import Exercice4 from "./exercices/Exercice4/Components";

function App() {
  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      <Exercice1 />

      <Exercice2 />

      <h1 className="my-5">Voici quelques objets de ma boutique :</h1>

      <Exercice3 />

      <Exercice4 />
    </div>
  );
}

export default App;
