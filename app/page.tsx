'use client';
import Header from "@/components/Layout/Header";
import Pokedex from "@/components/Pokedex/Pokedex";
import { useState } from "react";

function Home() {
  const [reload, setReload] = useState(0);
  const handleLogoClick = () => {
    setReload(reload => reload + 1);
  }

  return (
    <div>
      <Header onLogoClick={handleLogoClick}/>
      <Pokedex reload={reload}/>
    </div>
  );
}

export default Home;