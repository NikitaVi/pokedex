import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../page/Home";
import PokemonsPage from "../../page/Pokemons";

const RootPage = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/pokemons'} element={<PokemonsPage/>}/>
    </Routes>
  )
}

export default RootPage;