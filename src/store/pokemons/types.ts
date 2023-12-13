export type PokemonsListType = {
  name: string;
  id: number;
  img: string;
  type: string[]
}

export enum PokemonTypeEnum {
  "normal" = "#d3d3d3",
  "fighting" = "#d3d3d3",
  "flying" = "#e4f2f8",
  "poison" = "#a666bd",
  "ground" = "#b3dd9f",
  "rock" = "#d3d3d3",
  "bug" = "#b3dd9f",
  "ghost" = "#d3d3d3",
  "steel" = "#d3d3d3",
  "fire" = "#ffcbb9",
  "water" = "#e4f2f8",
  "grass" = "#b3dd9f",
  "electric" = "#ffcbb9",
  "psychic" = "#d3d3d3",
  "ice" = "#e4f2f8",
  "dragon" = "#d3d3d3",
  "dark" = "#d3d3d3",
  "fairy" = "#ffcbb9",
  "unknown" = "#d3d3d3",
  "shadow" = "#d3d3d3"
}
