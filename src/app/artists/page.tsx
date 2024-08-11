import { Artist, getArtists } from "../../lib/api";
import Link from "next/link";
import { Music } from "lucide-react";

const ArtistCard = ({ artist }: { artist: Artist }) => (
  <Link href={`/artists/${artist.id}`} className="group">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${artist.id}/400/400`}
          alt={artist.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <Music
            className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
            size={48}
          />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{artist.name}</h2>
        <p className="text-sm text-gray-500">Artist</p>
      </div>
    </div>
  </Link>
);

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Popular Artists</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}
