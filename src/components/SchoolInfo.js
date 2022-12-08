import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../firebase";

export default function SchoolInfo() {
  const [schools, setschools] = useState([]);
  const [school2, setschool2] = useState([]);
  const [School3, Setschool3] = useState([]);

  useEffect(() => {
    return async () => {
      const querySnapshot = await getDocs(collection(firestoreDB, "schools"));
      setschools(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      console.log(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
      // createDate(1669219200);
    };
  }, []);

  useEffect(() => {
    return async () => {
      const querySnapshot = await getDocs(collection(firestoreDB, "school2"));
      setschool2(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      console.log(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
      // createDate(1669219200);
    };
  }, []);

  useEffect(() => {
    return async () => {
      const querySnapshot = await getDocs(collection(firestoreDB, "School3"));
      Setschool3(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      console.log(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
      // createDate(1669219200);
    };
  }, []);
  return (
    <>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div class="rounded overflow-hidden shadow-lg">
    {
      schools.map(schools =>
      <>
      <img class="w-full" src={schools.img_url} alt="Mountain" /><div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{schools.title}</div>
          <p class="text-gray-700 text-base">
            {schools.des}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <a href="/services"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button></a>
          </div>
          </>
        )
      }
    </div>

    <div class="rounded overflow-hidden shadow-lg">
    {
      school2.map(school2 =>
      <>
      <img class="w-full" src={school2.img_url} alt="Mountain" /><div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{school2.title}</div>
          <p class="text-gray-700 text-base">
            {school2.des}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <a href="/services"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button></a>
          </div>
          </>
        )
      }
    </div>
  <div class="rounded overflow-hidden shadow-lg">
  {
      School3.map(School3 =>
        <>
        <img class="w-full" src={School3.img_url} alt="River" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{School3.title}</div>
        <p class="text-gray-700 text-base">
          {School3.des}
          </p>
      </div>
      <div class="px-6 pt-4 pb-2">
            <a href="/services"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button></a>
          </div>
    </>
    )
  }
    </div>
   
  </div>
      </>
  );
}

