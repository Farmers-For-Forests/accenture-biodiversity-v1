import React, { useState } from "react";
import CTA from "../../components/Common_Components/CTA";
import Toggle_login_signup from "../../components/Common_Components/Toggle_login_signup";
import Google_singup_CTA from "../../components/Google_singup_CTA";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { encrypt } from "../../HelperFunctions/calcMD5";
import axios from "axios";
import Login_with_google from "../../components/Login_with_google";
import { useNavigate } from "react-router-dom";

const Login_Form = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Email is invalid");
      return;
    }

    if (!password) {
      toast.error("Password is required");
      return;
    }

    // If all validations pass
    const hashedPassword = encrypt(password, 12);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("HashedPassword", hashedPassword);

    try {
      const response = await axios.post(
        "https://farmersforforests.org/admin/acc/login",
        {
          email: email,
          password: hashedPassword,
        }
      );

      // toast.success("Account created successfully");
      console.log(response);
    } catch (error) {
      toast.error("An error occurred while creating the account");
      console.error(error);
    }
    // Add your login logic here
  };

  const checkEmail = async () => {
    if (!email) {
      toast.warning("Email is required");
    } else if (email && !validateEmail(email)) {
      toast.warning("Invalid email");
    } else {
      try {
        const response = await axios.post(
          "https://farmersforforests.org/admin/acc/reset",
          {
            email,
          }
        );
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("hash", response.data.hash);
        localStorage.setItem("userid", response.data.userid);
        navigate("/resetPassword");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-[18px]">
      <section className="w-full">
        <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
          <div
            className={`w-full h-[56px] ${
              focusedInput === "Email" ? "border-none" : "border-2 border-black"
            } bg-white`}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedInput("Email")}
              onBlur={() => setFocusedInput(null)}
              className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                focusedInput === "Email"
                  ? "border-2 border-black"
                  : "border-none"
              } bg-white`}
              style={{ boxSizing: "border-box" }}
            />
          </div>

          <div
            className={`w-full h-[56px] ${
              focusedInput === "password"
                ? "border-none"
                : "border-2 border-black"
            } bg-white`}
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
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
        </form>
        <div className="my-3">
          <Login_with_google />
        </div>
      </section>

      <Toggle_login_signup
        notify="Don’t have an account?"
        redirect_To=" Sign up"
        redirect_path="/signup"
      />
      <p
        className="w-full flex justify-center items-center"
        onClick={checkEmail}
      >
        <span className="cursor-pointer font-[400] font-inter leading-[21.78px] text-[14px] text-gray-400 underline">
          Reset Password
        </span>
      </p>
    </div>
  );
};

export default Login_Form;
