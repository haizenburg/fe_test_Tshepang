const genres = [
  "Pop",
  "Rock",
  "Hip Hop",
  "Electronic",
  "Classical",
  "Jazz",
  "R&B",
  "Country",
  "Reggae",
  "Metal",
  "Folk",
  "Blues"
];

export default function GenresPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Genres</h1>
      <div className="grid grid-cols-3 gap-4">
        {genres.map((genre) => (
          <div key={genre} className="bg-gray-100 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold">{genre}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
