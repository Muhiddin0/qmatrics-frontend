export type Menu = {
  [key in Lang]: {
    id: number;

    title: string;

    path?: string;

    newTab: boolean;

    submenu?: {
      id: number;

      title: string;

      path: string;

      newTab: boolean;
    }[];
  }[];
};
