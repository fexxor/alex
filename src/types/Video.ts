export type Video = {
  id: string;
  title: string;
  info: {
    title: string;
    description?: string;
    starring?: string[];
    awardsAndNominations?: string[];
    screenedAt?: string[];
  };
};
