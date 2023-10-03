import { Outlet } from "react-router-dom";
import ButtonStart from "../../../components/ButtonStart";
import HomePage from "../../../components/HelloPage";
import "./styles.css";

export default function InitialPage(){

    return(

        <>
            <section className="initial-section">
                <HomePage />
                <ButtonStart />
                
            </section>

            <Outlet />
        
        </>
    );
}