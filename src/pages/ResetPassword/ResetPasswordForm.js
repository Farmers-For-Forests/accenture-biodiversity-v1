import React, { useState } from "react";
import CTA from "../../components/Common_Components/CTA";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { encrypt } from "../../HelperFunctions/calcMD5";
import { toast } from "react-toastify";

const ResetPasswordForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters, with uppercase, lowercase, number, and special character."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    // Validate password before submission
    if (!validatePassword(password)) {
        toast.error("Password must be at least 8 characters, with uppercase, lowercase, number, and special character.")
        setPasswordError("")
      return;
    }

  

    // Log the password and OTP to the console
    console.log("New Password:", password);
    console.log("OTP:", otp);
    const encryptedPasswords = encrypt(password,12)
  console.log("EncryptedPass",encryptedPasswords);
  toast.success("Password changed")

    // Simulate sending data to the backend
    // For now, just log to the console
  };

  return (
    <div className="w-full flex flex-col gap-[18px]">
      <section className="w-full">
        <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full font-inter h-[48px] p-[12px] mt-1 placeholder-[#125B57] border-2 ${
                focusedInput === "password" ? "border-[#125B57]" : "border-[#125B57]"
              } bg-[#FAFAFA] box-border outline-none text-[#125B57] font-[300] text-[16px] leading-[19.36px] tracking-[-2%]`}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#125B57] font-inter font-[300] text-[14px] leading-[19.36px]"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
           
          </div>

          <input
            type="text"
            required
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            onFocus={() => setFocusedInput("OTP")}
            onBlur={() => setFocusedInput(null)}
            className={`w-full font-inter h-[48px] p-[12px] mt-1 placeholder-[#125B57] border-2 ${
              focusedInput === "OTP" ? "border-[#125B57]" : "border-[#125B57]"
            } bg-[#FAFAFA] box-border outline-none text-[#125B57] font-[300] text-[16px] leading-[19.36px] tracking-[-2%]`}
          />
 {/* {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )} */}
          <CTA btn_name="Reset Password" />
        </form>
      </section>
    </div>
  );
};

export default ResetPasswordForm;
