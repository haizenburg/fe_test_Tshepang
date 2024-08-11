"use client";

import { useState, useEffect } from "react";
import { Mail, Music, Phone } from "lucide-react";
import AlbumCard from "./AlbumCard"; // Assuming we move AlbumCard to its own file
import ContactInfoSection from "./ContactInfoSection";
import { Album, Artist } from "@/lib/api";

export default function ArtistInteractiveContent({
  artist,
  initialAlbums
}: {
  artist: Artist;
  initialAlbums: Album[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [albums, setAlbums] = useState(initialAlbums);

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (localStorage.getItem("contactBlocked") === "true") {
    return (
      <div className="text-center mt-8">
        Contact information is blocked due to too many incorrect attempts.
      </div>
    );
  }

  return (
    <>
      <ContactInfoSection artist={artist} />

      <h2 className="text-3xl font-bold mb-6">Albums</h2>
      <input
        type="text"
        placeholder="Search albums..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredAlbums.map((album: Album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </>
  );
}
