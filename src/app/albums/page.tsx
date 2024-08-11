import { getAlbums } from "../../lib/api";
import Link from "next/link";

const AlbumCard = ({ album }) => (
  <Link href={`/albums/${album.id}`} className="group">
    <div className="relative overflow-hidden rounded-md aspect-square mb-2">
      <img
        src={`https://picsum.photos/seed/${album.id}/300/300`}
        alt={album.title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <button className="text-white bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          Play
        </button>
      </div>
    </div>
    <h3 className="font-semibold truncate">{album.title}</h3>
    <p className="text-sm text-gray-500">Artist {album.userId}</p>
  </Link>
);

const AlbumRow = ({ title, albums }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="flex overflow-x-auto pb-4 -mx-4 px-4 space-x-4">
      {albums.map((album) => (
        <div key={album.id} className="w-40 flex-shrink-0">
          <AlbumCard album={album} />
        </div>
      ))}
    </div>
  </div>
);

export default async function AlbumsPage() {
  const albums = await getAlbums();
  const trendingAlbums = albums.slice(0, 10);
  const popularAlbums = albums.slice(10, 20);
  const newReleasesAlbums = albums.slice(20, 30);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Albums</h1>
      <AlbumRow title="Trending Now" albums={trendingAlbums} />
      <AlbumRow title="Popular Albums" albums={popularAlbums} />
      <AlbumRow title="New Releases" albums={newReleasesAlbums} />
    </div>
  );
}
