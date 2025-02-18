import { useState } from "react";

const Miroir = () => {
  const [isHovered, setIsHovered] = useState(false);

  const styleMiroir = isHovered ? { opacity: 1 } : { opacity: 0 };

  return (
    <div
      className="card bg-dark border border-warning-subtle miroir"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="aventurier.jpg"
        className="card-img-top img-fluid"
        style={styleMiroir}
      />
      <div className="card-body">
        <h5 className="card-title">Miroir mon beau miroir</h5>
        <p className="card-text">Quel est mon reflet ?</p>
      </div>
    </div>
  );
};

export default Miroir;
