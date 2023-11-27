"use client";

import { Avatar } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="relative inline-block text-left z-30">
        <div
          onClick={toggleOpen}
          className="p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          <Avatar src={currentUser?.image ?? ""}/>
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="origin-top-right absolute rounded-md w-[170px] right-0 mt-2 overflow-hidden top-12 text-sm flex flex-col cursor-pointer shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            {currentUser ? (
              <div>
                <Link href={"/orders"}>
                  <MenuItem onClick={toggleOpen}>Tus ordenes</MenuItem>
                </Link>
                <Link href={"/admin"}>
                  <MenuItem onClick={toggleOpen}>
                    Panel de administracion
                  </MenuItem>
                </Link>
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href={"/login"}>
                  <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href={"/register"}>
                  <MenuItem onClick={toggleOpen}>Registrate</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
