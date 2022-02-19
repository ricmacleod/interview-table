export interface ITableResponseElement {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface ITableResponseElementWtihEdit extends ITableResponseElement {
  isBeingEdited: boolean;
}
