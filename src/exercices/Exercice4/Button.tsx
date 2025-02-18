interface ButtonProps {
  text: string;
  color: string;
  onClick: () => void;
}

const Button = ({ text, color, onClick }: ButtonProps) => {
  let buttonColor: string;

  switch (color) {
    case "red":
      buttonColor = "btn-danger";
      break;
    case "blue":
      buttonColor = "btn-primary";
      break;
    case "green":
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
