import './App.css'
//import CharacterGallery from "./components/CharacterGallery.tsx";
//import {useState} from "react";
//import {characters} from "./Characters.ts";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.tsx";
import MainPage from "./components/MainPage.tsx";
import NavBar from "./components/NavBar.tsx";
import CharacterForm from "./components/CreateCharForm.tsx";
import CharacterCard from "./components/CharacterCard.tsx";
import {characters} from "./Characters.ts";

export default function App() {


    return (
        <>
            <NavBar/>
        <Routes>
            <Route path={"/"} element={<WelcomePage/>}/>
            <Route path={"/morty"}element={<MainPage/>}/>
            <Route path={"/charcter/:id"} element={<CharacterCard />}/>
            <Route path={"/newM"}element={<CharacterForm />}/>
        </Routes>
        </>)
}
