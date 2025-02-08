import "../styles/Message.css"
import lightBulb from "../assets/light-bulb2.svg"

export function Message({message}: {message: string}) {
    return (
        <div className="message-wrapper">
            {message &&
                <>
                    <img className="message-icon" src={lightBulb}/>
                    <p>{message}</p>
                </>
            }
        </div>
    )
}