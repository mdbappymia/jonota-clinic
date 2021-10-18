import { useEffect, useState } from "react";

const useData = () => {
  const [services, setServices] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  //   Load data for services
  useEffect(() => {
    fetch("/data/fakeDB.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //   load data for specialists
  useEffect(() => {
    fetch("/data/doctors.json")
      .then((res) => res.json())
      .then((data) => setSpecialists(data));
  }, []);
  return { services, specialists };
};

export default useData;
