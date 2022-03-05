import {AiOutlineMenu} from 'react-icons/ai';
import { StyledFilter } from '../Home.styled';

const Filter = () => {
  return (
    <StyledFilter className='filter'>
        <AiOutlineMenu className='icon icon-menu' size={28} color='green'/>
        <div className='filter-setting'>

        </div>
    </StyledFilter>
  )
}

export default Filter