import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import React from "react";

interface NavbarProps {
  children: React.ReactNode;
  state: boolean;
  updateVisible: (newValue: boolean) => void;
}

type KeyValuePairs<T> = {
  [key: string]: T;
};

const titlePage: KeyValuePairs<string> = {
  "/": "Dashboard",
  "/category": "Product Categories",
  "/product": "Products",
  "/transaction": "Transactions",
};

const Navbar: React.FC<NavbarProps> = ({ children, updateVisible, state }) => {
  const pathname = usePathname();
  const handleOnclick = () => {
    updateVisible(!state);
  };

  return (
    <div className="w-full space-y-6">
      {/* Navbar */}
      <div className="flex flex-row items-center sm:justify-between bg-white w-full py-4 px-7 h-fit shadow-lg rounded-lg">
        <div className="font-semibold text-xl hidden sm:block">
          {titlePage[pathname]}
        </div>

        <div className="flex space-x-4 justify-between w-full sm:w-fit">
          <Input type="search" placeholder="Search...." />

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Menu
            size={42}
            className="hover:cursor-pointer xl:hidden text-gray-500"
            onClick={handleOnclick}
          />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Navbar;
