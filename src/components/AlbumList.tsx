"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Album } from "../lib/api";

interface AlbumListProps {
  initialAlbums: Album[];
}

const AlbumList: React.FC<AlbumListProps> = ({ initialAlbums }) => {
  const [albums, setAlbums] = useState(initialAlbums);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filtered = initialAlbums.filter((album) =>
      album.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setAlbums(filtered);
  }, [searchQuery, initialAlbums]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search albums..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map((album) => (
          <Link href={`/albums/${album.id}`} key={album.id}>
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold">{album.title}</h2>
              <img
                src={`https://via.placeholder.com/150?text=Album+${album.id}`}
                alt={`Album ${album.id}`}
                className="mt-2 rounded"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
