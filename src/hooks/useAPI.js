import { useEffect, useState } from "react";
import { API_URL } from "../constants";

export default function({ options, url }) {
  const [result, setResult] = useState();
  const [error, setError] = useState();

  const defaultOptions = {
    method: "GET"
  };

  useEffect(
    async () => {
      const r = await fetch(API_URL + url, {
        ...defaultOptions,
        ...options
      });
      if (r.ok) {
        setResult(await r.json());
      } else {
        setError(r.status);
      }
    },
    [options, url]
  );

  if (error) {
    throw new Error(error);
  }

  return result;
}
