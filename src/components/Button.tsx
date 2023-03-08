import { FC } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

interface Iprops {
  text: String;
  isArrow?: Boolean;
}

const Button: FC<Iprops> = ({ text, isArrow = false }) => {
  return (
    <button className='btn flex justify-center items-center gap-4'>
      {text}{" "}
      {isArrow ? (
        <BsArrowRightCircle className='text-xl bg-white text-black rounded-full' />
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;
