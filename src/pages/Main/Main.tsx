import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Main = () => {

    const nav = useNavigate()

    const [isAuthed] = useState<boolean>(true)

    useEffect(() => {
        if (!isAuthed) nav('/sign_in')
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default Main;