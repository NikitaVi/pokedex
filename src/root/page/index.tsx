import React from "react";
import { Route, Routes } from "react-router-dom";
import PokemonsPage from "../../page/Pokemons";

const RootPage = () => {

  return (
    <Routes>
      <Route path='/' element={<PokemonsPage/>}/>
      {/*<Route path='/pokemons' element={<PokemonsPage/>}/>*/}
      {/*<Route path='/pokemons/:id' element={<DetailPokemon/>}/>*/}
    </Routes>
  )
}

export default RootPage;
