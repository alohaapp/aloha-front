import { useEffect, useState } from "react";
import { API_URL } from "../constants";

export default function({ method = "GET", url }) {
  const [result, setResult] = useState();

  useEffect(
    () =>
      fetch(API_URL + url, {
        method
      })
        .then(r => r.json())
        .then(setResult),
    [method, url]
  );

  return result;
}
