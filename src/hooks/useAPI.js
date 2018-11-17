import { useEffect, useState } from "react";
import { API_URL } from "../constants";

export default function({ method = "GET", url }) {
  const [result, setResult] = useState();

  useEffect(
    async () => {
      const r = await fetch(API_URL + url, {
        method
      });
      if (r.ok) {
        setResult(await r.json());
      } else {
        throw new Error(r.status);
      }
    },
    [method, url]
  );

  return result;
}
