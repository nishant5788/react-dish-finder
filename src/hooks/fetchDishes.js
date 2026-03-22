import { useEffect, useState } from "react";

export default function FetchDishes(searchInput, setDishes) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchDish() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`,
            { signal: controller.signal },
          );

          if (!res.ok)
            throw new Error("Something went wrong with Fetching Dishes!");

          const data = await res.json();

          setDishes(data.meals);

          console.log("sss is " + data.meals);

          if (data.Response === "False")
            throw new Error("Response is not Found!");


          setIsLoading(false);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }

      if(searchInput.length < 3) {
      setDishes([]);
      return;
    }

      fetchDish();

      return function () {
        controller.abort();
      };
    },
    [searchInput],
  );

  return { isLoading };
}
