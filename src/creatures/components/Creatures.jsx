import { useQuery } from "@tanstack/react-query";
import CreaturesService from "../services/CreaturesServices";
import CardCreature from "./CardCreature/CardCreature";
import "./Creature.css";

const creatureService = new CreaturesService();

const Creatures = () => {
  //console.log("creatureService", creatureService);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["creature"], // pour cache validation
    queryFn: () => creatureService.getAllCreatures(),
  });

  //console.log("data", data);

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="cardContainer">
      {data &&
        data.map((creature) => {
          return <CardCreature key={creature.id} creature={creature} />;
        })}
    </div>
  );
};

export default Creatures;
