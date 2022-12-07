import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../firebase";

export default function SchoolInfo() {
  const [schools, setschools] = useState([]);

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
  return (
    <>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {
      schools.map(schools =>
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src="https://unmil.unmissions.org/sites/default/files/styles/gallery/public/shb_3479_0.jpg?itok=T4u0vJx4" alt="Lutheran" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{schools.title}</div>
            <p class="text-gray-700 text-base">
              {schools.des}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>
          </div>
        </div>
      )
}
      </div>
    </>
  );
}

