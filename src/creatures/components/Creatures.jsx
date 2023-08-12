import { useQuery } from "@tanstack/react-query";
import CreaturesService from "../services/CreaturesServices";

const creatureService = new CreaturesService();

const Creatures = () => {
  console.log("creatureService", creatureService);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["creature"], // pour cache validation
    queryFn: () => creatureService.getAllCreatures(),
  });

  console.log("data", data);

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data &&
        data.map((creature) => {
          return (
            <div key={creature.id}>
              <h2>{creature.name}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default Creatures;
