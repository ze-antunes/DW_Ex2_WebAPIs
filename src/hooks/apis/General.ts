import { AxiosError, AxiosResponse } from "axios";
import { axios } from "../Axios.ts";

export const useAPI = (urlEndpoint) => {
  return {
    getEndpoint: () => {
      return axios
        .get(urlEndpoint)
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    postEndpoint: (token: string, data: any) => {
      return axios
        .post(urlEndpoint, { data })
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    putEndpoint: (token: string, data: any) => {
      return axios.put(urlEndpoint, { data }).catch((error: AxiosError) => {
        throw error;
      });
    },

    deleteEndpoint: (token: string, data: any) => {
      return axios.delete(urlEndpoint, { data }).catch((error: AxiosError) => {
        throw error;
      });
    },

    getMyPlaylists: (id: number) => {
      return axios
        .get(`/me/playlists`)
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    getPlaylist: (id: number) => {
      return axios
        .get(`/playlists/${id}`)
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    getPlaylistTracks: (id: number) => {
      return axios
        .get(`/playlists/${id}/tracks`)
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    getCategories: () => {
      return axios
        .get("/browse/categories")
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    getCategoryPlaylists: (id: number) => {
      return axios
        .get(`/browse/categories/${id}/playlists`)
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    getFeaturedPlaylists: () => {
      return axios
        .get("/browse/featured-playlists")
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    getNewReleases: () => {
      return axios
        .get("/browse/new-releases")
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },

    getRecommendations: () => {
      return axios
        .get(
          `/recommentadionts?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`
        )
        .then((response: AxiosResponse) => {
          return response.data;
        })
        .catch((error: AxiosError) => {
          throw error;
        });
    },
  };
};
