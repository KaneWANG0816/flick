import { StyledGo } from "../Home.styled"

const Go = () => {
  return (
    <StyledGo className="go">
        <input className='go-name' type="text" placeholder='Your nick name'></input>
        <button className='btn btn-Go'>Go</button>
    </StyledGo>
  )
}

export default Go