import {GoPrimitiveDot} from 'react-icons/go';
import { StyledStatus } from '../Home.styled';

const Status = ({onliner}) => {
  return (
    <StyledStatus className="status">
        <p><GoPrimitiveDot className='status-dot'/> {onliner} online</p>
    </StyledStatus>
  )
}

export default Status