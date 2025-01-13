import CharacterGallery from "./CharacterGallery.tsx";
import {useState} from "react";
import {characters} from "../Characters.ts";
import {Character} from "../types/RickAndMortyCharacter.ts";
export function addCharacter(char:Character){
characters.push(char);
}
export default function MainPage(){
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));
    return    <>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
        {
            filteredCharacters.length > 0
                ? <CharacterGallery characters={filteredCharacters}/>
: <p>No characters found</p>
}
    </>
}