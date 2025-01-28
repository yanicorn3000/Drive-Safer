export type EntityType = "tip" | "comment";

export type Tip = {
  title: string;
  img: string;
  alt: string;
  description: string;
  uuid: string;
  likes: Like[];
  comments: Comment[];
  tags: string[];
};

export type Like = {
  usernameUUID: string;
};

export type Comment = {
  uuid: string;
  tipUUID: string;
  username?: string;
  message: string;
  likes: Like[];
  createdAt: string;
  isLiked: boolean;
};

export type User = {
  username?: string;
  password: string;
  email: string;
  points: number;
  uuid: string;
};
