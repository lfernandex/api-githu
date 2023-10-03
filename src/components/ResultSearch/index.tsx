import { Outlet } from "react-router-dom";
import { UserDTO } from "../../models/user";
import "./styles.css";


type Props = {
    user: UserDTO;
}

export default function ResultSearch({ user }: Props) {

    return (

        <>
            <section className="card-section">
                <div className="details-card">
                    <div className="profile-icon">
                        <img src={user.avatar_url} alt="profile" />
                    </div>
                    <div className="details">
                        <h3>Informações</h3>
                        <div className="results">
                            <div className="profile-url space-between">
                                <p> Perfil: {user.url} </p>
                            </div>
                            <div className="followers space-between">
                                <p>Seguidores: {user.followers}</p>
                            </div>
                            <div className="location space-between">
                                <p>Localização: {user.location}</p>
                            </div>
                            <div className="name space-between">
                                <p>Nome: {user.login}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    );

}