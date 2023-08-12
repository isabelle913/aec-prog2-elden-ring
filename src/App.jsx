import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Creatures from "./creatures/components/Creatures";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <div>
        <h1 className="text-center display-1">Elden Ring</h1>
        <QueryClientProvider client={queryClient}>
          <Creatures />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
