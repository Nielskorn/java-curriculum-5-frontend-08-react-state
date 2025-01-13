import CharacterGallery from "./CharacterGallery.tsx";
import {useEffect, useState} from "react";
import {characters} from "../Characters.ts";
import {Character} from "../types/RickAndMortyCharacter.ts";
import  axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export function addCharacter(char:Character){
characters.push(char);
}
export default function MainPage(){

    const [page,setPage]=useState<number>(1)
    let enabledP:boolean
    let enabledN:boolean
    function  updatePage(nr:number){
        if(page>=1){
        setPage(nr)}
    }
    const [data, setData]=useState<Character[]>([])
    function fetchData() {
        axios.get("https://rickandmortyapi.com/api/character",{params:{page:page}}).then(response=>{setData(response.data.results)
        enableCheck(response.data.info)
        }).catch(error=>console.log(error)

        )
        
    }
    function enableCheck(info){
        console.log(info)
        if(info.prev==null){
            enabledP=false
            enabledN=true
        }else if(info.next==null){
            enabledN=false
            enabledP=true
        }
        else {
            enabledP=true
            enabledN=true
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])

   //

    //useEffect(()=>{fetchData},[])
    const [searchText, setSearchText] = useState("");

    //console.log(data)
    const filteredCharacters:Character[] = data.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));
    return    <>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
        {
            filteredCharacters.length > 0
                ? <div>
                <CharacterGallery characters={filteredCharacters}/>
                <button onClick={()=>updatePage(page+1)}disabled={enabledN}> next </button>
                <button onClick={()=>updatePage(page-1)  }disabled={enabledP}>previous </button>
                </div>
: <p>No characters found</p>
}
    </>
}