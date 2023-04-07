export type Video = {
  id: string;
  source: Source;
  title: string;
  tagline?: string;
  productionDescription: string;
  description?: string;
  starring?: string[];
  awardsAndNominations?: string[];
  premieredAt?: string;
  screenedAt?: string[];
  aspectRatio: AspectRatio;
  imdbLink?: string;
};

export type AspectRatio = "16:9" | "3:2";

export type Source = "Vimeo" | "Youtube";
