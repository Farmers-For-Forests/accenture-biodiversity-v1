import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import CTA from '../../components/Common_Components/CTA';
import Toggle_login_signup from '../../components/Common_Components/Toggle_login_signup';
import Google_singup_CTA from '../../components/Google_singup_CTA';

const Form = () => {
    const [focusedInput, setFocusedInput] = useState(null);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate(); // Initialize navigate for redirection

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dummy credentials for testing
        const dummyEmail = 'test@example.com';
        const dummyUsername = 'testuser';
        const dummyPassword = 'password123';

        if (email === dummyEmail && username === dummyUsername && password === dummyPassword) {
            // Navigate to the next page or home page on successful login
            navigate('/home'); // Replace '/home' with the path you want to navigate to
        } else {
            setLoginError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="w-[290px] mx-auto flex flex-col gap-[18px]">
            <section className="w-full">
                <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
                    <div
                        className={`w-[290px] h-[56px] ${
                            focusedInput === "email" ? "border-none" : "border-2 border-black"
                        } bg-white`}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            onFocus={() => setFocusedInput("email")}
                            onBlur={() => setFocusedInput(null)}
                            className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                                focusedInput === "email"
                                    ? "border-2 border-black"
                                    : "border-none"
                            } bg-white`}
                            style={{ boxSizing: "border-box" }}
                        />
                    </div>

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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

                    {loginError && <p className="text-red-500">{loginError}</p>}

                    <CTA btn_name="Create account"/>
                    <Google_singup_CTA btn_name="Continue with Google"/>
                </form>
            </section>

            <Toggle_login_signup 
                notify="Already have an account ?" 
                redirect_To=" Log in" 
                redirect_path="/login"
            />
        </div>
    );
};

export default Form;
