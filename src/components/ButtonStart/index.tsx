import { Link } from "react-router-dom";
import "./styles.css";

export default function ButtonStart() {

    return (

        <>

            <div className="button-section">
                <Link to="/findbyuser">
                    <button type="submit">Começar</button>
                </Link>
            </div>

        </>
    );

}