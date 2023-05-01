import { useEffect, useState } from "react";

export default function Dashboard() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("/api/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [page]);

  return <div>dashboard</div>;
}
