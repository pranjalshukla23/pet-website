import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState<Boolean>(false);

  return (
    <div className='flex justify-between items-center p-4'>
      {/* logo  container*/}
      <div className='logo-container flex justify-start items-center'>
        <div className='logo w-12 h-12 relative'>
          <Image src='/images/logo.png' alt='logo' fill />
        </div>
        <div className='title text-2xl font-bold text-center tracking-widest'>
          <h1>Woofs & Wags</h1>
          <h3 className='uppercase text-xs tracking-tight text-blue-400'>
            The dream pet destination
          </h3>
        </div>
      </div>

      {/* desktop  menu container */}
      <div className='hidden lg:block  text-xl font-bold mr-12'>
        <ul className='flex justify-evenly items-center gap-x-12'>
          <li>Home</li>
          <li>Shop</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* mobile menu container */}
      <div className='relative block lg:hidden text-2xl z-50'>
        <button onClick={() => setIsShowMenu(!isShowMenu)}>
          <AiOutlineMenu />
        </button>
        {/* menu list */}
        <div
          className={`border-2 absolute top-8 right-4 ${
            isShowMenu ? "block" : "hidden"
          }`}
        >
          <ul className='flex flex-col p-4 px-8 gap-4 text-lg'>
            <li>Home</li>
            <hr />
            <li>Shop</li>
            <hr />
            <li>Gallery</li>
            <hr />
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
