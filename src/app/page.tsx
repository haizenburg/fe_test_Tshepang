import { getAlbums, getArtists } from "../lib/api";
import FeaturedAlbum from "../components/FeaturedAlbum";
import TopArtists from "../components/TopArtists";
import TopHits from "../components/TopHits";

export default async function Home() {
  const albums = await getAlbums();
  const artists = await getArtists();
  const featuredAlbum = albums[0]; // Assume the first album is featured

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Discover</h1>
      <FeaturedAlbum album={featuredAlbum} />
      <TopArtists artists={artists.slice(0, 6)} />
      <TopHits albums={albums.slice(0, 5)} />
    </div>
  );
}
