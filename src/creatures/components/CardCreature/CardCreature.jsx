import "./CardCreature.css";

const CardCreature = ({ creature }) => {
  console.log("props(creature) name", creature);

  const style = {
    backgroundImage: `url(${creature.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="card" style={style}>
      <h2 className="text-center text-white">{creature.name}</h2>
      <p className="text-center text-white">
        Description: {creature.description}
      </p>
      <p className="text-center text-white">Location: {creature.location}</p>
    </div>
  );
};

export default CardCreature;

// TODO ?? Pourquoi cette erreur sur creature et ...?
// https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7
