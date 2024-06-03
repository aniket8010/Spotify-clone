import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { PiShuffleFill } from "react-icons/pi";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { RiRepeatFill } from "react-icons/ri";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { LuMic2 } from "react-icons/lu";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOutlineSpeaker } from "react-icons/md";
import { TiVolumeDown } from "react-icons/ti";
import { PiResizeFill } from "react-icons/pi";
import { AiOutlineArrowsAlt } from "react-icons/ai";

export const Player = () => {
    return <>
        <div className='py-4 pt-3 px-4 text-white flex justify-between'>
            <div className='flex flex-wrap gap-4'>
                <div className='cursor-pointer'>
                    <img height={"55px"} width={"55px"} src="https://i.scdn.co/image/ab67616d0000b273021d7017f73387b008eab271" alt="" />
                </div>
                <div className='flex flex-col items-start justify-center cursor-pointer'>
                    <div className='text-sm hover:underline'>
                        <h6>Satranga (from "ANIMAL")</h6>
                    </div>
                    <div className='text-xs nunito-light text-[#ffffffb2] flex flex-wrap items-start'>
                        <p className='hover:underline'>Arjit Singh ,</p>
                        <p className='hover:underline'>Shreyas Puranik ,</p>
                        <p className='hover:underline'>Siddharth-Garima</p>
                    </div>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <CiCirclePlus size={20} />
                </div>
            </div>
            <div className=' gap-1 flex flex-col items-center'>
                <div className='flex gap-5 items-center cursor-pointer'>
                    <PiShuffleFill size={20} />
                    <TbPlayerSkipBackFilled size={18} />
                    <MdOutlinePlayCircleFilled size={40} />
                    <TbPlayerSkipForwardFilled size={18} />
                    <RiRepeatFill size={16} />
                </div>
                <div className='flex text-xs items-center gap-2 text-[#ffffff90]'>
                    <div>
                        <p>0:43</p>
                    </div>
                    <div className='bg-[#ffffff90] px-[255px] rounded-xl h-[3.5px]'>
                    </div>
                    <div>
                        <p>4:31</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center text-[#ffffffa5]'>
                <div className='flex gap-[13px] items-center cursor-pointer'>
                    <AiOutlinePlaySquare size={19}/>
                    <LuMic2 size={17}/>
                    <HiOutlineQueueList size={19}/>
                    <MdOutlineSpeaker size={20} />
                    <TiVolumeDown size={23}/>
                    <div className='bg-[#ffffff90] px-[40px] rounded-xl h-[3.5px]'>
                    </div>
                    <PiResizeFill size={21} />
                    <AiOutlineArrowsAlt size={20} />
                </div>
            </div>
        </div>

    </>
}
