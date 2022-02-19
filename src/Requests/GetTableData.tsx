import { ITableResponseElement } from "../Interfaces/ResponsesTypes";

export default async function requestTableData() {
  const response: ITableResponseElement[] = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=100",
    {
      method: "GET",
    }
  ).then((response) => response.json());
  console.log("Table data acquired ----", response);
  return response;
}
