import Link from "next/link";
import { Disc } from "lucide-react";
import { Album } from "@/lib/api";

export default function AlbumCard({ album }: { album: Album }) {
  return (
    <Link href={`/albums/${album.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={`https://picsum.photos/seed/${album.id}/300/300`}
            alt={album.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <Disc
              className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
              size={48}
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate text-black">{album.title}</h3>
        </div>
      </div>
    </Link>
  );
}
