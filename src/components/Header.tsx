"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-white p-4 flex items-center justify-between border-b">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/music" className="text-blue-500">
              Music
            </a>
          </li>
          <li>
            <a href="/podcast" className="text-gray-500">
              Podcast
            </a>
          </li>
          <li>
            <a href="/live" className="text-gray-500">
              Live
            </a>
          </li>
          <li>
            <a href="/radio" className="text-gray-500">
              Radio
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative">
        {isSearchOpen ? (
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full py-1 px-4 pr-10"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => !searchQuery && setIsSearchOpen(false)}
            />
          </form>
        ) : (
          <button onClick={() => setIsSearchOpen(true)}>
            <Search className="text-gray-500" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
