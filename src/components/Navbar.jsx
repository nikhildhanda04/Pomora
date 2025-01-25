import React from 'react'
import { LuTimer as Timer} from "react-icons/lu";
import { FaListCheck as Todo} from "react-icons/fa6";
import { AiOutlineHistory as History } from "react-icons/ai";
import { FaUserGraduate as User} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-primary shadow-xl rounded-lg px-8 py-4 flex flex-row justify-between'>
      <div className='flex flex-row items-center font-[inter]'>
        <div className='text-white '>
            <Timer size={40}/>
        </div>
        <div className='text-white ml-2 text-2xl font-semibold mr-16'>
            timer
        </div>
        <div className='text-white '>
            <Todo size={35}/>
        </div>
        <div className='text-white ml-2 text-2xl font-semibold mr-16'>
            todo
        </div>
        <div className='text-white '>
            <History size={35}/>
        </div>
        <div className='text-white ml-2 text-2xl font-semibold mr-16'>
            history
        </div>
        <div className='text-white '>
            <User size={30}/>
        </div>
        <div className='text-white ml-2 text-2xl font-semibold'>
            profile
        </div>

      </div>
    </div>
  )
}

export default Navbar
