import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_with_google = ({ btn_name }) => {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Token Response:", tokenResponse);

      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        );

        console.log("User Info:", userInfo);
        const response = await axios.post('https://farmersforforests.org/admin/acc/login', {
          
        email:userInfo.data.email,
        email_verified:userInfo.data.email_verified,
        sub:userInfo.data.sub
    });

        console.log(response);

        // navigate("/");
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: (errorResponse) => {
      console.error("Login Error:", errorResponse);
    },
  });

  return (
    <button
      onClick={() => googleLogin()}
      className="font-inter w-[100%] h-[56px] bg-[#125B57] text-white font-[700] text-[16px] leading-[19.36px] text-center rounded-[40px]"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      Login with Google
    </button>
  );
};

export default Login_with_google;
