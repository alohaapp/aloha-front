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
      const response = await fetch(API_URL + url, {
        ...defaultOptions,
        ...options
      });
      if (response.ok) {
        setResult(await response.json());
      } else {
        setError(response.status);
      }
    },
    [options, url]
  );

  if (error) {
    throw new Error(error);
  }

  return result;
}
