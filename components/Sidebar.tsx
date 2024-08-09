import Link from "next/link";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  CreditCard,
  Folder,
  LayoutDashboard,
  Newspaper,
  Settings,
  User,
} from "lucide-react";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className="cursor-pointer">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            <Link href="#">Dashboard</Link>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <Newspaper className="h-4 w-4 mr-2" />
            <Link href="#">Posts</Link>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <Folder className="h-4 w-4 mr-2" />
            <Link href="#">Cattegory</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="w-4 h-4 mr-2" />
            <span>Profile</span>
            <CommandShortcut>⌘</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="w-4 h-4 mr-2" />
            <span>Billing</span>
            <CommandShortcut>⌘</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="w-4 h-4 mr-2" />
            <span>Setting</span>
            <CommandShortcut>⌘</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
