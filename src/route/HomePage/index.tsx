import { Outlet } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";


export default function HomePage(){
    return(

        <>
            <HeaderPage />

            <Outlet />
        </>
        
    );
}