import { StyledWelcome } from "../Home.styled"

const Welcome = () => {
  return (
    <StyledWelcome className="welcome">
        <h1 className="welcome-header">Welcome to filck, a chat website for fun</h1>
        <br className="br"/>
        <div className='welcome-message'>
            <p>Before start your trip, please note that anyone you meet here is anonymous, follow the rules to keep yourself away troubles:<br />
                &emsp; Do not share your personal infomation to anyone;<br />
                &emsp; Do not do anything may against the local law;<br />
                &emsp; Do not conduct any trade or exchange here;<br />
            </p>
            <p> Other things your may wanna know:<br />
                &emsp; You can be anyone here;<br />
                &emsp; Your conversation will not be recorded;<br />
                &emsp; The one you meet is not robot;<br />
            </p>
            <p>Happy chatting!</p>
        </div>
    </StyledWelcome>
  )
}

export default Welcome