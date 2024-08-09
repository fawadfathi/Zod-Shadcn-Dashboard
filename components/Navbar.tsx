import { RxGithubLogo } from "react-icons/rx";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { RxAvatar } from "react-icons/rx";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-slate-800">
      <Link href="https://github.com/fawadfathi/Zod-Shadcn-Dashboard">
        <RxGithubLogo style={{ color: "white" }} size="30" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus: outline-none">
          <Avatar className="w-8 h-8">
            <RxAvatar style={{ color: "white" }} size={35} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
