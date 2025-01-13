import React from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
interface ModalProps {
  children: React.ReactNode;
  className?: string;
  handleEvent?: () => void;
}

export const Modal = ({ children, className, handleEvent }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 backdrop-blur-xl bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center z-50">
      <div className="flex justify-center h-[50svh] p-3 w-[30svw] relative bg-white">
        <button
          className="bg-transparent text-white px-4 py-2 rounded-md absolute right-0 flex items-center cursor-pointer"
          onClick={handleEvent}
        >
        <IoClose className="bg-black text-2xl"/>
        </button>
        <div className={clsx("bg-white p-8 rounded-lg ", className)}>
          {children}
        </div>
      </div>
    </div>
  );
};
