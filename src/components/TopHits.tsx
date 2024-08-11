import { Album } from "../lib/api";
import Link from "next/link";

const TopHits = ({ albums }: { albums: Album[] }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Top Hits</h2>
      <ul>
        {albums.map((album, index) => (
          <li
            key={album.id}
            className="flex items-center py-2 border-b group hover:bg-gray-50"
          >
            <span className="w-8 text-center">{index + 1}</span>
            <img
              src={`https://picsum.photos/seed/${album.id}/80/80`}
              alt={album.title}
              className="w-12 h-12 object-cover mr-4"
            />
            <div className="flex-1">
              <Link
                href={`/albums/${album.id}`}
                className="font-semibold hover:underline"
              >
                {album.title}
              </Link>
              <Link
                href={`/artists/${album.userId}`}
                className="block text-sm text-gray-600 hover:underline"
              >
                Artist {album.userId}
              </Link>
            </div>
            <span className="text-sm text-gray-600 mr-4">3:30</span>
            <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              •••
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopHits;
