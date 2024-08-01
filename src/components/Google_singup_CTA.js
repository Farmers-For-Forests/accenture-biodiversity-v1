import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "../styles/GoogleOAuth_button.css";

const Google_singup_CTA = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const buttonText = document.querySelector(".nsm7Bb-HzV7m-LgbsSe-BPrWId");
      if (buttonText && buttonText.innerText !== "Continue with Google") {
        buttonText.innerText = "Continue with Google";
        clearInterval(interval);
      }
    }, 100); // Check every 100ms

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const onLoginSuccess = () => {};

  const onLoginError = () => {};
  return (
    <>
      <div className="custom-google-button pb-[8px]">
        <GoogleLogin
          onSuccess={onLoginSuccess}
          onError={onLoginError}
          
        />
      </div>
    </>
  );
};

export default Google_singup_CTA;
