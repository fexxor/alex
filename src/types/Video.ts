export type Video = {
  id: string;
  title: string;
  tagline?: string;
  info: {
    title: string; // TODO remove
    productionDescription?: string;
    description?: string;
    starring?: string[];
    awardsAndNominations?: string[];
    screenedAt?: string[];
  };
  aspectRatio: AspectRatio;
};

export type AspectRatio = "16:9" | "3:2";
