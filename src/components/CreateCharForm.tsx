
import {FormEvent, useState} from "react";
import {addCharacter} from "./MainPage.tsx";
import { useSubmit } from "react-router";
//import {s} from "vite/dist/node/types.d-aGj9QkWt";


export default function CharacterForm(){
    const [name,SetName]=useState<string>("")
    const [species,SetSpecies]=useState<string>("")
    const [status,SetStatus]=useState<string>("")
    const [CharId,setId]=useState<number>(21)
    //const [image,SetImage]=useState()
    function createChar(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        if(status!==undefined){
            addCharacter({
                created: "",
                episode: [],
                gender: "",
                id: CharId,
                image: "",
                location: {url:"",name:""},
                origin: {url:"unkown",name:""},
                type: "",
                url: "",
                name:name ,species:species ,status:status })
        }
        setId(CharId+1)
        console.log("added")
    }
    return <>
    <form onSubmit={createChar}>
        <label> Name of Char:
        <input

        type={"text"}
        value={name}
        onChange={event =>SetName(event.target.value) }
        />
        </label>
        <label> species:
        <input
        type={"text"}
        value={species}
        onChange={event => SetSpecies(event.target.value)}
        />
        </label>
        <label> status
        <input
        type={"text"}
        value={status}
        onChange={event => SetStatus(event.target.value)}
        />
        </label>
        {/* <input
        type={"image"}
        value={image}
        onChange={event=>SetImage(event.target.value)}
        />*/}
        <button type={"submit"}>submit</button>
    </form>
        </>
}