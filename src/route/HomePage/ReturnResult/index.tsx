import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResultSearch from "../../../components/ResultSearch";
import { findAll } from "../../../services/UserService";


export default function ReturnResult() {

    const [user, setUser] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userName = searchParams.get('userName');

    useEffect(() => {
        if (userName) {
            findAll(userName)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [userName]);

    return (
        <>
                {user && <ResultSearch user={user} />}
        </>
    );

}