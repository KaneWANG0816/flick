import { StyledGo, StyledPair, StyledLoader } from "../Home.styled";
import react, {useState} from 'react';
import {FaTimesCircle} from 'react-icons/fa';
import Draggable from "react-draggable";

const Go = ({currentUser}) => {
  const [pair, setPair] = useState(false);
  const Popout = () => (
    <StyledPair>
      <div className="overlap"></div>
      <Draggable >
        <div className="pair">
          <div className="cancel">
            <FaTimesCircle className='btn btn-cancel' size={24} onClick={() => setPair(false)}/>
          </div>
          <div className="loading"><Loader /></div>
          <div className="reminder">
            Please be patient, there are {currentUser} people pairing.
          </div>
        </div>
      </Draggable>
    </StyledPair>)
    const Loader = () => (
      <StyledLoader className="preloader">
        <div className="preloader__ring">
          <div className="preloader__sector">P</div>
          <div className="preloader__sector">a</div>
          <div className="preloader__sector">i</div>
          <div className="preloader__sector">r</div>
          <div className="preloader__sector">i</div>
          <div className="preloader__sector">n</div>
          <div className="preloader__sector">g</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
        </div>
        <div className="preloader__ring">
          <div className="preloader__sector">P</div>
          <div className="preloader__sector">a</div>
          <div className="preloader__sector">i</div>
          <div className="preloader__sector">r</div>
          <div className="preloader__sector">i</div>
          <div className="preloader__sector">n</div>
          <div className="preloader__sector">g</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
        </div>
      </StyledLoader>)

  return (
    <react.Fragment>
        <StyledGo className="go">
            <em className="happy"><strong>Happy chatting!</strong></em>
            <input className='go-name' type="text" placeholder='Your nick name' maxLength= '16'></input>
            <button className='btn btn-go' onClick={() => setPair(true)}>Go</button>
        </StyledGo>
        {pair ? <Popout />:null}
    </react.Fragment>
  )
}

export default Go