import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Artist {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getAlbums = async (): Promise<Album[]> => {
  const response = await axios.get(`${API_BASE_URL}/albums`);
  return response.data;
};

export const getAlbum = async (albumId: number): Promise<Album | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/albums/${albumId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};

export const getUser = async (userId: number): Promise<User> => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export const getAlbumsByUser = async (userId: number): Promise<Album[]> => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}/albums`);
  return response.data;
};

export const getArtists = async (): Promise<Artist[]> => {
  const albums = await getAlbums();
  const artistIds = Array.from(new Set(albums.map((album) => album.userId)));
  const artists = await Promise.all(artistIds.map((id) => getUser(id)));
  return artists.map((user) => ({ id: user.id, name: user.name }));
};

export const getArtist = async (artistId: number): Promise<Artist> => {
  const user = await getUser(artistId);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
    company: user.company
  };
};
