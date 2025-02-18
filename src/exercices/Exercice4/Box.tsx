interface BoxProps {
  color: string;
}

const Box = ({ color }: BoxProps) => {
  return <div className="boite" style={{ backgroundColor: color }}></div>;
};

export default Box;
