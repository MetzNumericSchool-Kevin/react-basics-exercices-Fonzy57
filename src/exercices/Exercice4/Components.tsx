import { useState } from "react";
import Button from "./Button";
import Box from "./Box";
import { ButtonEnum } from "./Button.enum";

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
        <div className="col">
          <Button
            text="Change la première boîte en rouge"
            color={ButtonEnum.red}
            onClick={() => handleChangeColor("red", 1)}
          />
        </div>
        <div className="col">
          <Button
            text="Change les 2 premieres boîtes en bleu"
            color={ButtonEnum.blue}
            onClick={() => handleChangeColor("blue", 2)}
          />
        </div>
        <div className="col">
          <Button
            text="Change toutes les boîtes en vert"
            color={ButtonEnum.green}
            onClick={() => handleChangeColor("green", 3)}
          />
        </div>
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
