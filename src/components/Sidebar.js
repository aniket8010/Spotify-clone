import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { BiLibrary } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowForward } from "react-icons/md";

export const Sidebar = () => {
    return (
        <>
            <div className='text-white bg-[#121212] rounded-md'>
                <div className='ps-5 py-5 text-lg font-semibold flex flex-col gap-5 m-2 cursor-pointer'>
                    <div className='flex flex-wrap items-center gap-4 hover:underline'>
                        <GoHomeFill size={24} />
                        <p>Home</p>
                    </div>
                    <div className='flex flex-wrap items-center gap-4 hover:underline'>
                        <IoIosSearch size={25} />
                        <p>Search</p>
                    </div>
                </div>
            </div>
            <div className='text-white bg-[#121212] rounded-md pb-3'>
                <div className='ps-5 py-5 text-lg font-semibold flex flex-col gap-5 m-2 cursor-pointer'>
                    <div className='flex flex-wrap justify-between text-[#adadade6] hover:text-white'>
                        <div className='flex flex-wrap items-center gap-4'>
                            <BiLibrary size={25} />
                            <p>Your Library</p>
                        </div>
                        <div className='flex flex-wrap items-center gap-4'>
                            <AiOutlinePlus size={22} />
                            <MdArrowForward size={22} />
                        </div>
                    </div>
                </div>
                <div className='bg-[#242424] m-2 rounded-md p-4'>
                    <div>
                        <div className='font-bold'>
                            <p>Create Your First Playlist</p>
                        </div>
                        <div className='font-semibold text-sm mt-1'>
                            <p>It's easy,we'll help you </p>
                        </div>
                        <div className='my-4'>
                            <button className='text-black px-3 py-1 rounded-full bg-white text-sm font-bold'>Create Playlist</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#242424] m-2 rounded-md p-4 mb-44'>
                    <div>
                        <div className='font-bold'>
                            <p>Let's find some some podcasts to follow</p>
                        </div>
                        <div className='font-semibold text-sm mt-1'>
                            <p>we'll keep you updated on new episodes</p>
                        </div>
                        <div className='my-4'>
                            <button className='text-black px-3 py-1 rounded-full bg-white text-sm font-bold'>Browse podcasts</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
