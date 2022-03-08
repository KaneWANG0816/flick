import { StyledWelcome } from "../Home.styled"

const Welcome = () => {
  return (
    <StyledWelcome className="welcome">
        <h1 className="welcome-header">Welcome to <i>Flick</i>, a chat website for fun</h1>
        <hr className="break"/>
        <div className='welcome-message'>
            <p>Before start your trip, please note that anyone you meet here is anonymous, follow the rules to keep yourself away from troubles:<br /></p>
            <strong className="rules">
              &emsp; Do not share your personal infomation to anyone;<br />
              &emsp; Do not do anything may against the local law;<br />
              &emsp; Do not conduct any trade or exchange;<br />
            </strong>
            
            <p> Other things your may wanna know:<br /></p>
            <strong className="rules">
              &emsp; You can be anyone here;<br />
              &emsp; Your conversation will not be recorded;<br />
              &emsp; The one you meet is definitely not robot;<br />
            </strong>
        </div>
    </StyledWelcome>
  )
}

export default Welcome