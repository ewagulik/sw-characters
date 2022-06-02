export interface CharacterApiData {
  name: string;
  height: string;
}

export interface Character {
  name: string;
  height: number;
}

export type Characters = Character[];
