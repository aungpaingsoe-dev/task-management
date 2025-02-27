import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header: React.FC = () => {
  return (
    <nav className="py-3 px-5 flex justify-between items-center sticky top-0 bg-white shadow-sm z-10 ">
      <div className="text-xl font-bold">My Task</div>
      <div>
        <Avatar>
          <AvatarImage alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Header;
