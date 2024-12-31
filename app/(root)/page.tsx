'use client';
import Header from "@/app/components/Header";
import Pokedex from "@/app/components/Pokedex";
import { useState } from "react";

function Home() {
  const [reload, setReload] = useState(0);
  const handleReload = () => {
    setReload((reload) => reload + 1);
  };

  return (
    <div>
      <Header onLogoClick={handleReload} />
      <Pokedex reload={reload}/>
    </div>
  );
}

export default Home;