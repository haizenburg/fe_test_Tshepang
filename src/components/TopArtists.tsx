import { Artist } from "../lib/api";
import Link from "next/link";

const TopArtists = ({ artists }: { artists: Artist[] }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Top Artists</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {artists.map((artist) => (
          <Link
            href={`/artists/${artist.id}`}
            key={artist.id}
            className="text-center group"
          >
            <div className="relative overflow-hidden rounded-full mb-2">
              <img
                src={`https://via.placeholder.com/100x100?text=${artist.name}`}
                alt={artist.name}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-sm">{artist.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
