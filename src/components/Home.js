import Welcome from './home/Welcome';
import Go from './home/Go';
import Filter from './home/Filter';
import Footer from './home/Footer';
import Status from './home/Status';
import {StyledHome} from './Home.styled';

const home = () => {
  return (
    <StyledHome className='home'>
        <Filter />
        <Welcome />
        <Go />
        <Status onliner='5' />
        <Footer />
    </StyledHome>
  )
}

export default home