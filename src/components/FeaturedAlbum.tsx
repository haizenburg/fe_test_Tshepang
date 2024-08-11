import { Album } from "../lib/api";

const FeaturedAlbum = ({ album }: { album: Album }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex items-center">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{album.title}</h2>
        <p className="text-gray-600 mb-4">{album.userId} million plays</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2">
          Play Now
        </button>
        <button className="text-red-500">♥</button>
      </div>
      <img
        src={`https://via.placeholder.com/300x300?text=${album.title}`}
        alt={album.title}
        className="w-48 h-48 rounded-lg"
      />
    </div>
  );
};

export default FeaturedAlbum;
