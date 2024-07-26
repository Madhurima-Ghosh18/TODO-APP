import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';
import up_icon from '../assets/up.png';
import down_icon from '../assets/down.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, index, movetaskup, movetaskdown }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => { toggle(id) }} className='flex flex-1 items-center cursor-pointer'>
        <img className='w-7' src={isComplete ? tick : not_tick} alt="" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <div className='flex space-x-4'>
        <img onClick={() => movetaskup(index)} src={up_icon} className='w-3.5 cursor-pointer' alt="" />
        <img onClick={() => movetaskdown(index)} src={down_icon} className='w-3.5 cursor-pointer' alt="" />
        <img onClick={() => { deleteTodo(id) }} src={delete_icon} className='w-3.5 cursor-pointer' alt="" />
      </div>
    </div>
  );
}

export default TodoItems;
