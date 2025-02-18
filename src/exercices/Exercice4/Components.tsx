import { useState } from "react";
import Button from "./Button";
import Box from "./Box";

const buttons = [
  {
    text: "Change la première boîte en rouge",
    numberBox: 1,
    color: "red",
  },
  {
    text: "Change les 2 premieres boîtes en bleu",
    numberBox: 2,
    color: "blue",
  },
  {
    text: "Change toutes les boîtes en vert",
    numberBox: 3,
    color: "green",
  },
];

const Exercice4 = () => {
  const [colors, setColors] = useState<string[]>(["gray", "gray", "gray"]);

  const handleChangeColor = (color: string, buttonNumber: number) => {
    const newColors = colors.map((c, index) => {
      return index < buttonNumber ? color : c;
    });
    setColors(newColors);
  };

  return (
    <section id="exercice4" className="my-5">
      <h2>Les boîtes polycouleurs</h2>
      <div className="row">
        {buttons.map((button, index) => {
          return (
            <div className="col" key={index}>
              <Button
                text={button.text}
                color={button.color}
                onClick={() =>
                  handleChangeColor(button.color, button.numberBox)
                }
              />
            </div>
          );
        })}
      </div>

      <div className="row mt-5 gap-5">
        {colors.map((color, index) => (
          <Box key={index} color={color} />
        ))}
      </div>
    </section>
  );
};

export default Exercice4;
