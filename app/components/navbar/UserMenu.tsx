"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import LoginModal from "../Modals/LoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
                hidden 
                cursor-pointer 
                rounded-full 
                px-4 
                py-3 
                text-sm
                font-semibold
                hover:bg-neutral-100
                md:block"
        >
          Register Your House
        </div>

        <div
          onClick={toggleOpen}
          className="
                transtion
                flex
                cursor-pointer
                flex-row
                items-center
                gap-3
                rounded-full
                border-[1px]
                border-neutral-200
                p-4
                hover:shadow-md
                md:px-2
                md:py-1
            "
        >
          {/* Hamburger Menu */}
          <AiOutlineMenu />
          {/* Avatar image holder */}
          <div className="hidden md:block">
            <Avatar src={currentUser?.image}/>
          </div>
        </div>
      </div>

      {/* TODO Is open condition Duration : 31:33 */}

      {isOpen && (
        <div
          className="
                absolute
                right-0
                top-12
                w-[40vw]
                overflow-hidden
                rounded-xl
                bg-white
                text-sm
                shadow-md
                md:w-3/4

            "
        >
          <div className="flex cursor-pointer flex-col">
            {/* Signin conditional navbar render using current user */}

            {currentUser ? (
              <>
                {/* TODO Replace Menu item */}
                <MenuItem onClick={() => {}} label="My Trips" />

                {/* TODO Replace Menu item */}
                <MenuItem onClick={() => {}} label="My Favourite" />

                {/* TODO Replace Menu item */}
                <MenuItem onClick={() => {}} label="My Reservations" />

                {/* TODO Replace Menu item */}
                <MenuItem onClick={() => {}} label="My Properties" />

                {/* TODO Replace Menu item */}
                <MenuItem onClick={() => {}} label="Register your home" />

                <hr />

                {/* Signout Menu item */}
                <MenuItem onClick={() => signOut()} label="Sign out" />
              </>
            ) : (
              <>
                {/* Login Menu item */}
                <MenuItem onClick={loginModal.onOpen} label="login" />

                {/* Signup Menu item */}
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
