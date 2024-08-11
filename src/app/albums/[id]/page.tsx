import { getAlbumsByUser, getUser, getAlbum } from "../../../lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  </Link>
);

export default async function AlbumDetailPage({
  params
}: {
  params: { id: string };
}) {
  try {
    const albumId = parseInt(params.id);
    const album = await getAlbum(albumId);

    if (!album) {
      notFound();
    }

    const user = await getUser(album.userId);
    const userAlbums = await getAlbumsByUser(album.userId);

    return (
      <div className="p-6">
        <div className="flex items-center mb-8">
          <img
            src={`https://picsum.photos/seed/${album.id}/300/300`}
            alt={album.title}
            className="w-64 h-64 object-cover rounded-md shadow-lg mr-8"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{album.title}</h1>
            <Link
              href={`/artists/${user.id}`}
              className="text-xl text-gray-500 hover:underline"
            >
              {user.name}
            </Link>
            <p className="mt-4 text-gray-600">10 songs • 45 minutes</p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Other Albums by {user.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {userAlbums
              .filter((a) => a.id !== album.id)
              .slice(0, 6)
              .map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching album details:", error);
    notFound();
  }
}
