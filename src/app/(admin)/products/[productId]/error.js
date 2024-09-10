"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      Error-{error.message}
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}
