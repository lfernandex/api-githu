import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserDTO } from "../../models/user";
import { findAll } from "../../services/UserService";
import "./styles.css";


export default function FindProfile() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState<UserDTO | null>();
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        if (userName) {
            findAll(userName)
                .then(response => {
                    setUser(response.data);
                    setError(null); // Limpa qualquer erro anterior
                })
                .catch(error => {
                    console.error(error);
                    setUser(null); // Limpa qualquer usuário anterior
                    setError('Usuário não encontrado');
                });
        }
    }, [userName]);

    function handleInputChange(event: any) {
        setUserName(event?.target.value)

    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        if (!error) {
            navigate(`/findbyuser/result?userName=${userName}`);
        }
        else navigate("/findbyuser/notfound");


    }

    return (
        <>
            <form className="find">
                <div className="find-profile">
                    <div>
                        <h1>Encontre um perpfil Github</h1>
                    </div>

                    <div className="find-by-name">
                        <input
                            value={userName}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Usuário GitHub"
                        />
                    </div>

                    <div className="button-find">
                        <button onClick={handleFormSubmit} type="submit">Encontrar</button>
                    </div>
                </div>
            </form>

            <Outlet />
        </>
    );

}