"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Disc,
  Music,
  User,
  Clock,
  List,
  Heart,
  Folder,
  Settings,
  LogOut
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const NavItem = ({
    href,
    icon: Icon,
    children
  }: {
    href: string;
    icon: any;
    children: React.ReactNode;
  }) => {
    const isActive = pathname === href;
    return (
      <li>
        <Link
          href={href}
          className={`flex items-center ${
            isActive ? "text-blue-500" : "text-gray-700"
          }`}
        >
          <Icon className="mr-2" size={18} />
          {children}
        </Link>
      </li>
    );
  };

  return (
    <aside className="w-64 bg-white p-6 border-r">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Musicaly
        </Link>
      </div>
      <nav>
        <h2 className="text-sm font-semibold text-gray-500 mb-4">MENU</h2>
        <ul className="space-y-2">
          <NavItem href="/" icon={Home}>
            Explore
          </NavItem>
          <NavItem href="/albums" icon={Disc}>
            Albums
          </NavItem>
          <NavItem href="/genres" icon={Music}>
            Genres
          </NavItem>
          <NavItem href="/artists" icon={User}>
            Artists
          </NavItem>
        </ul>
      </nav>
      <nav className="mt-8">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">LIBRARY</h2>
        <ul className="space-y-2">
          <NavItem href="/recent" icon={Clock}>
            Recent
          </NavItem>
          <NavItem href="/playlists" icon={List}>
            Playlist
          </NavItem>
          <NavItem href="/favorites" icon={Heart}>
            Favorites
          </NavItem>
          <NavItem href="/local" icon={Folder}>
            Local
          </NavItem>
        </ul>
      </nav>
      <nav className="mt-8">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">SETTING</h2>
        <ul className="space-y-2">
          <NavItem href="/account" icon={Settings}>
            Account
          </NavItem>
          <NavItem href="/logout" icon={LogOut}>
            Logout
          </NavItem>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
