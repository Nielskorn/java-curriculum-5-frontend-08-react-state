import {Link} from "react-router-dom";

export default function NavBar(){
    return(
    <header>
        <div>
        <title>theMortySide</title>
            <h1>the Morty</h1>
        <Link to="/">Home </Link>
        <Link to="/morty">morty</Link>
            <Link to={"/newM"}>creatChar</Link>
        </div>
    </header>


    )
}