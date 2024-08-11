import { getArtist, getAlbumsByUser } from "../../../lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Music, User, Globe, Briefcase } from "lucide-react";
import ArtistInteractiveContent from "@/components/ArtistInteractiveContent";

export default async function ArtistDetailPage({
  params
}: {
  params: { id: string };
}) {
  try {
    const artistId = parseInt(params.id);
    const artist = await getArtist(artistId);
    const albums = await getAlbumsByUser(artistId);

    if (!artist) {
      console.log(artist);
      notFound();
    }

    return (
      <div className="bg-gradient-to-b bg-gray-100 text-black min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <img
                src={`https://picsum.photos/seed/${artist.id}/300/300`}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {artist.name}
              </h1>
              <div className="flex items-center text-gray-700 mb-4">
                <User className="mr-2" size={20} />
                <span>Artist</span>
              </div>
              <div className="text-gray-700 mb-2 flex items-center">
                <Globe className="mr-2" size={20} />
                <span>{artist.website}</span>
              </div>
              <div className="text-gray-700 mb-4 flex items-center">
                <Briefcase className="mr-2" size={20} />
                <span>
                  {artist.company.name} - {artist.company.catchPhrase}
                </span>
              </div>

              <ArtistInteractiveContent
                artist={artist}
                initialAlbums={albums}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching artist details:", error);
    throw error;
    // notFound();
  }
}
