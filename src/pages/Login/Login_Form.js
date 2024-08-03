// import React, { useState } from "react";
// import CTA from "../../components/Common_Components/CTA";
// import Toggle_login_signup from "../../components/Common_Components/Toggle_login_signup";
// import Google_singup_CTA from "../../components/Google_singup_CTA";
// import QRCodeComponent from "../../components/QRCodeComponent";

// const Login_Form = () => {
//   const [focusedInput, setFocusedInput] = useState(null);
//   // const [showQR, setShowQR] = useState(false);
//   // const [name,setName] = useState(true)

// //  const show = () =>{

// //   setName(!name)

// //  }

//   return (
//     <div className="w-[290px] mx-auto flex flex-col gap-[18px]">
//       <section className="w-full">
//         <form className="flex flex-col gap-[18px]">
//           <div
//             className={`w-[290px] h-[56px] ${
//               focusedInput === "username" ? "border-none" : "border-2 border-black"
//             } bg-white`}
//           >
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               onFocus={() => setFocusedInput("username")}
//               onBlur={() => setFocusedInput(null)}
//               className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
//                 focusedInput === "username" ? "border-2 border-black" : "border-none"
//               } bg-white`}
//               style={{ boxSizing: "border-box" }}
//             />
//           </div>

//           <div
//             className={`w-[290px] h-[56px] ${
//               focusedInput === "password" ? "border-none" : "border-2 border-black"
//             } bg-white`}
//           >
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               onFocus={() => setFocusedInput("password")}
//               onBlur={() => setFocusedInput(null)}
//               className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
//                 focusedInput === "password" ? "border-2 border-black" : "border-none"
//               } bg-white`}
//               style={{ boxSizing: "border-box" }}
//             />
//           </div>

//           <CTA btn_name="Log in" />
//           {/* <button onClick={show}>{!name ? "scan" : "close"}</button> */}
//           {/* {
//                 name ? <QRCodeComponent />: ""
//               } */}
//           <Google_singup_CTA btn_name="Login with Google" />
//         </form>
//       </section>

//       <Toggle_login_signup
//         notify="Don’t have an account?"
//         redirect_To=" Sign up"
//         redirect_path="/signup"
//       />

//     </div>
//   );
// };

// export default Login_Form;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CTA from "../../components/Common_Components/CTA";
import Toggle_login_signup from "../../components/Common_Components/Toggle_login_signup";
import Google_singup_CTA from "../../components/Google_singup_CTA";
import QRCodeComponent from "../../components/QRCodeComponent";

const Login_Form = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="w-[290px] mx-auto flex flex-col gap-[18px]">
      <section className="w-full">
        <form className="flex flex-col gap-[18px]">
          <div
            className={`w-[290px] h-[56px] ${
              focusedInput === "username"
                ? "border-none"
                : "border-2 border-black"
            } bg-white`}
          >
            <input
              type="text"
              placeholder="Username"
              required
              onFocus={() => setFocusedInput("username")}
              onBlur={() => setFocusedInput(null)}
              className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                focusedInput === "username"
                  ? "border-2 border-black"
                  : "border-none"
              } bg-white`}
              style={{ boxSizing: "border-box" }}
            />
          </div>

          <div
            className={`w-[290px] h-[56px] ${
              focusedInput === "password"
                ? "border-none"
                : "border-2 border-black"
            } bg-white`}
          >
            <input
              type="password"
              placeholder="Password"
              required
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
              className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                focusedInput === "password"
                  ? "border-2 border-black"
                  : "border-none"
              } bg-white`}
              style={{ boxSizing: "border-box" }}
            />
          </div>

          <CTA btn_name="Log in" />
          <Google_singup_CTA btn_name="Login with Google" />
        </form>
      </section>

      <Toggle_login_signup
        notify="Don’t have an account?"
        redirect_To=" Sign up"
        redirect_path="/signup"
      />
    </div>
  );
};

export default Login_Form;
