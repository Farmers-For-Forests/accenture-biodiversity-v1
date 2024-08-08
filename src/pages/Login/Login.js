import React, { useEffect } from "react";
import Login_Container from "./Login_Container";

const Login = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://farmersforforests.org/admin/acc/appdata/specieslistinfo",
  //         {
  //           method: "POST", 
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             region_id: "er102",
  //           }),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const dataset = await response.json();
  //       console.log(dataset);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <main className="box-border px-5">
      <section className="relative w-[100%] h-[100vh] ">
        <Login_Container />
      </section>
    </main>
  );
};

export default Login;
