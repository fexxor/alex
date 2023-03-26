export type Video = {
  title: string;
  info: {
    title: string;
    description?: string;
    starring?: string[];
    awardsAndNominations?: string[];
    screenedAt?: string[];
  };
  imageUrl: string;
  id: string;
};
