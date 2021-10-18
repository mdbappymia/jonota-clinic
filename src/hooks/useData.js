import { useEffect, useState } from "react";

const useData = () => {
  const [services, setServices] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  useEffect(() => {
    fetch("/data/fakeDB.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("data/doctors.json")
      .then((res) => res.json())
      .then((data) => setSpecialists(data));
  }, []);
  return { services, specialists };
};

export default useData;
