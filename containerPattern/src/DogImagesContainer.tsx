import { useCallback, useEffect, useState } from "react";
import DogImage from "./DogImage";

function DogImagesContainer() {
  const [dogs, setDogs] = useState<string[]>([]);

  const fetchDogs = useCallback(async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/6");
    const data: { message: string[] } = await response.json();
    setDogs(data.message);
  }, []);

  useEffect(() => {
    fetchDogs();
  }, [fetchDogs]);

  return (
    <>
      <div>
        <button onClick={fetchDogs}>Fetch Dogs</button>
      </div>
      {dogs.map((dog) => (
        <DogImage key={dog} url={dog} />
      ))}
    </>
  );
}

export default DogImagesContainer;
