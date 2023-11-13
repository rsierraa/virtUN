"use client";

import { Session } from "next-auth";
import Image from "next/image";
import profilePicPlaceholder from "@/assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProps {
    //the user could be not logged in, so we use the null type
    session: Session | null;
}

export default function UserMenuButton({session}: UserMenuButtonProps){
    const user = session?.user;

    return (
      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="btn-ghost btn-circle btn">
          {user ? (
            <Image
              src={user?.image || profilePicPlaceholder}
              alt="profile picture"
              width={40}
              height={40}
              className="w-10 rounded-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          )}
        </label>
        <ul
        tabIndex={0}
        className="z-30 p-2 mt-3 shadow dropdown-content menu rounded-box menu-sm w-52 bg-base-100"
        >
            <li>
                {user ? 
                <button onClick={() => signOut({callbackUrl: "/"})}>Cerrar Sesión</button>
                :
                <button onClick={() => signIn()}>Iniciar Sesión</button> 
            }
            </li>
        </ul>
      </div>
    );
}