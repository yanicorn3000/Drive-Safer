import { QueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { Tip, EntityType } from "./types";

export const USER_LS_KEY = "auth_token";

type Options = {
  body?: Record<string, any>;
  headers?: Record<string, string>;
  method?: "POST" | "GET" | "DELETE";
};

type User = {
  email: string;
  points: number;
  username: string;
  uuid: string;
};

const getToken = () => {
  const lsToken = localStorage.getItem(USER_LS_KEY);
  if (lsToken) {
    return JSON.parse(lsToken);
  }
  return undefined;
};

const apiUrl = "https://drivesafer.pedzik.it"; // "http://192.168.88.230:4322";

export const fetchFromAPI = async <T = any,>(
  url: string,
  options: Options = {}
) => {
  const token = getToken();

  const req = await fetch(url, {
    ...options,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
      ...options.headers,
    },
    body: JSON.stringify(options.body),
  });

  if (req.status === 204) {
    return undefined;
  }

  if (req.status >= 400) {
    throw await req.json();
  }

  const response = await req.json();

  return response as T;
};

export const useTips = (limit?: number) => {
  return useQuery({
    queryKey: ["tips", limit],
    queryFn: async () => {
      let tips;

      try {
        const response = await fetchFromAPI<Tip[]>(
          `${apiUrl}/tips${limit ? `?limit=${limit}` : ""}`
        );

        if (!response || response.length === 0) {
          throw new Error("Brak dostępnych tipów.");
        }

        tips = response;
      } catch (err) {
        console.log(err);
        throw err;
      }

      return tips;
    },
  });
};

export const useTip = (uuid: string) => {
  return useQuery({
    queryKey: ["tips", uuid],
    queryFn: async () => {
      let tip;

      try {
        const response = await fetchFromAPI<Tip>(`${apiUrl}/tips/${uuid}`);

        if (!response) {
          throw new Error("Brak tipu.");
        }

        tip = response;
      } catch (err) {
        console.log(err);
        throw err;
      }

      return tip;
    },
  });
};

export const useTipOfTheDay = () => {
  return useQuery({
    queryKey: ["tipOfTheDay"],
    queryFn: async () => {
      let tip;

      try {
        const response = await fetchFromAPI<Tip>(
          `${apiUrl}/tips/tip-of-the-day`
        );

        if (!response) {
          throw new Error("Brak tipu.");
        }

        tip = response;
      } catch (err) {
        console.log(err);
        throw err;
      }

      return tip;
    },
  });
};

export const useTipTag = (tag: string) => {
  return useQuery({
    queryKey: ["tips", tag],
    queryFn: async () => {
      let tips;

      try {
        const response = await fetchFromAPI<Tip[]>(`${apiUrl}/tags/${tag}`);

        if (!response) {
          throw new Error("Brak tipu.");
        }

        tips = response;
      } catch (err) {
        console.log(err);
        throw err;
      }

      return tips;
    },
  });
};

export const useAddComment = () =>
  useMutation({
    mutationFn: async (newComment: {
      entityUUID: string;
      username?: string;
      message: string;
    }) => {
      const response = await fetchFromAPI(
        `${apiUrl}/tips/${newComment.entityUUID}/comment`,
        {
          method: "POST",
          body: {
            username: newComment.username,
            message: newComment.message,
          },
          headers: {
            "content-type": "application/json",
          },
        }
      );

      queryClient.invalidateQueries({ queryKey: ["tips"] });
      queryClient.invalidateQueries({ queryKey: ["tipOfTheDay"] });

      return response;
    },
  });

export const useLogin = () =>
  useMutation({
    mutationFn: async (user: { email: string; password: string }) => {
      const response = await fetchFromAPI(`${apiUrl}/user/signup`, {
        method: "POST",
        body: user,
        headers: {
          "content-type": "application/json",
        },
      });

      return response as {
        user: User;
        token: string;
      };
    },
  });

export const useAddUser = () => {
  return useMutation({
    mutationFn: async (newUser: { password: string; email: string }) => {
      const response = await fetchFromAPI(`${apiUrl}/user/register`, {
        method: "POST",
        body: {
          email: newUser.email,
          password: newUser.password,
        },
        headers: {
          "content-type": "application/json",
        },
      });
      return response as {
        user: User;
        token: string;
      };
    },
  });
};

export const useUserData = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const token = getToken();
      if (!token) return null;

      let user: User | null = null;

      try {
        const response = await fetchFromAPI<User>(`${apiUrl}/user/data`);

        if (!response) {
          throw new Error("Brak uzytkownika");
        }

        user = response;
      } catch (err) {
        return null;
      }

      return user;
    },
  });
};

export const useUserPoints = () => {
  return useMutation({
    mutationFn: async (newPoints: { points: number }) => {
      const response = await fetchFromAPI(`${apiUrl}/user/add-points`, {
        method: "POST",
        body: {
          points: newPoints.points,
        },
        headers: {
          "content-type": "application/json",
        },
      });

      queryClient.invalidateQueries({ queryKey: ["currentUser"] });

      return response;
    },
  });
};

export const useAddLike = () =>
  useMutation({
    mutationFn: async (newLike: {
      entityUUID: string;
      entityType: EntityType;
      usernameUUID?: string;
    }) => {
      const response = await fetchFromAPI(
        `${apiUrl}/${newLike.entityType}/${newLike.entityUUID}/like`,
        {
          method: "POST",
          body: {
            usernameUUID: newLike.usernameUUID,
          },
          headers: {
            "content-type": "application/json",
          },
        }
      );

      queryClient.invalidateQueries({
        queryKey: ["tips"],
      });
      queryClient.invalidateQueries({ queryKey: ["tipOfTheDay"] });

      return response;
    },
  });

export const useRemoveLike = () => {
  return useMutation({
    mutationFn: async (newLike: {
      entityUUID: string;
      entityType: EntityType;
      usernameUUID?: string;
    }) => {
      const response = await fetchFromAPI(
        `${apiUrl}/${newLike.entityType}/${newLike.entityUUID}/like`,
        {
          method: "DELETE",
          body: {
            usernameUUID: newLike.usernameUUID,
          },
          headers: {
            "content-type": "application/json",
          },
        }
      );

      queryClient.invalidateQueries({
        queryKey: ["tips"],
      });
      queryClient.invalidateQueries({ queryKey: ["tipOfTheDay"] });

      return response;
    },
  });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
    },
  },
});
