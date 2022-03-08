import {AiOutlineMenu} from 'react-icons/ai';
import { StyledFilter } from '../Home.styled';
import React, {useState} from 'react';
const Filter = ({area, age, gender, code}) => {
  const [open, setOpen] = useState(false);
  const DropDown = () => {
    return(
      <div className='filter-dropDown'>
        <div className='choice choice1'>
          <label className='label label1'>Area</label>
          <select className='select select 1'>
          <option value=''>{area}</option>
          <option value=''>1</option>
          <option value=''>2</option>
          <option value=''>3</option>
          <option value=''>4</option>
          </select>
        </div>
        <div className='choice choice2'>
          <label className='label label2'>Age</label>
          <select className='select select2'>
            <option value=''>{age}</option>
            <option value=''>1</option>
            <option value=''>2</option>
            <option value=''>3</option>
            <option value=''>4</option>
          </select>
        </div>
        <div className='choice choice3'>
          <label className='label label3'>Gender</label>
          <select className='select select3'>
            <option value=''>{gender}</option>
            <option value=''>1</option>
            <option value=''>2</option>
            <option value=''>3</option>
            <option value=''>4</option>
          </select>
        </div>
        <div className='choice choice4'>
          <label className='label label3'>Code</label>
          <input className='code' placeholder={code} maxLength={16}></input>
        </div>
      </div>
    )
  }

  return (
    <StyledFilter className='filter'>
        <AiOutlineMenu className='icon icon-menu' size={36} color='#bfbfbf' onClick={() => setOpen(!open)}/>
        {open && <DropDown/>}
    </StyledFilter>
  )
}

export default Filter