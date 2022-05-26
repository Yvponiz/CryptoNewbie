import { FormEvent, FunctionComponent, useState } from "react";
import commonProps from "../../utils/commonProps";

type EmailProps = {
    isLoggedIn: boolean;
    email: string;
};

function onSubmit(event: FormEvent, state) {
    event.preventDefault()
    fetch("/api/changeEmail",
        {
            body: JSON.stringify(state),
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
        }).catch((response) => response.json())
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "success") {
                window.location.href = "profile"
            }
            else if (data.status === "erreur") {
                window.alert(data.errors.join("\n"))
            }
        })
}

export async function getServerSideProps({ req, res }) {
    return await commonProps({ req, res })
}

export const EmailField: FunctionComponent<EmailProps> = ({ email }) => {
    const [editable, setEditable] = useState(false);
    const handleClick = () => setEditable((editable) => !editable);
    const [state, changeState] = useState({
        email: null
    })

    if (!editable) {
        return (
            <>
                <div className='change-email'>
                    <span>Courriel :</span>
                    <blockquote contentEditable={editable} onInput={(event) => changeState({ ...state, email: event.currentTarget.textContent })}>
                        {email}
                    </blockquote>
                    <button className="submit-button" onClick={handleClick}>Modifier</button>
                </div>
            </>
        );
    }
    else {
        return (
            <form className='change-email' onSubmit={(event) => onSubmit(event, state)}>
                <span> Courriel :</span>
                <blockquote style={{ backgroundColor: '#00008b' }} contentEditable={editable} onInput={(event) => changeState({ ...state, email: event.currentTarget.textContent })}>
                    {email}
                </blockquote>
                <button className="submit-button">Confirmer</button>
            </form>
        )
    }
}
