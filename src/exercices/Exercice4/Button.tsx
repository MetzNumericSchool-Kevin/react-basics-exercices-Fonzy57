import { ButtonEnum } from "./Button.enum";

interface ButtonProps {
  text: string;
  color: ButtonEnum;
  onClick: () => void;
}

const Button = ({ text, color, onClick }: ButtonProps) => {
  let buttonColor: string;

  switch (color) {
    case ButtonEnum.red:
      buttonColor = "btn-danger";
      break;
    case ButtonEnum.blue:
      buttonColor = "btn-primary";
      break;
    case ButtonEnum.green:
      buttonColor = "btn-success";
      break;

    default:
      break;
  }

  return (
    <button className={`btn ${buttonColor}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
