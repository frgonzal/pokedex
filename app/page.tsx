import Pokedex from "@/components/Pokedex/Pokedex";

function Home() {
  return (
    <div className="p-10 flex flex-col min-h-[calc(100vh-6rem)]">
      <Pokedex/>
    </div>
  );
}

export default Home;