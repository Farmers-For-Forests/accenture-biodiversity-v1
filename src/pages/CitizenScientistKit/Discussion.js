import React, { useState } from 'react'
import Top_Header from '../../components/Common_Components/Top_Header'
import CloseIcon from '@mui/icons-material/Close';


import PostButton from './PostButton';
import AddPhoto from './AddPhoto';

const Discussion = () => {
    const [focusedInput, setFocusedInput] = useState(null);
  return (
    <div className="w-[100%] ">
        <Top_Header title="Citizen scientist kit"/>
        <section className="w-[330.2px] max-h-[586px] mt-[19px] flex flex-col gap-[205px] mx-auto">
            <section className="w-full max-h-[325px] flex flex-col gap-[45px]">
                <div className="w-full max-h-[22px] flex gap-[30px]">
                    <div className="w-[236.2px] h-[22px] flex gap-[27px]">
                        {/* icon */}
                        <CloseIcon/>
                        {/* text */}
                        <p className="font-inter font-[400] text-[16px] leading-[24px] tracking-[-2.3%] text-[#125B57]">Start a new discussion</p>
                    </div>
                    <div>
                        {/* post link */}
                        <p className="font-inter font-[600] text-[16px] leading-[24px] tracking-[-2.3%] text-[#125B57]">Post</p>
                    </div>
                </div>

                <div className="w-[314px] max-h-[258px] mx-auto flex flex-col gap-[13px]">
                    {/* inputs */}
                    <input
                        type="text"
                        required
                        
                        placeholder="Enter your topic to discuss"
                        onFocus={() => setFocusedInput("topic")}
                        onBlur={() => setFocusedInput(null)}
                        className={`w-full font-inter h-[47px] placeholder-[#125B57] py-0 px-2.5 border-2 rounded-[10px] ${
                        focusedInput === "topic" ? 'border-[#125B57]' : 'border-[#125B57]'
                        } bg-[#FAFAFA] box-border outline-none  text-[#125B57] font-[400] text-[16px] leading-[24px] tracking-[-2.3%]`}
                     />

                     {/* description input */}
                        <textarea
                            required
                            placeholder="Description"
                            onFocus={() => setFocusedInput("topic")}
                            onBlur={() => setFocusedInput(null)}
                            className={`w-full font-inter h-[138px] placeholder-[#125B57] py-[10px] px-2.5 border-2 rounded-[10px] ${
                                focusedInput === "topic" ? 'border-[#125B57]' : 'border-[#125B57]'
                            } bg-[#FAFAFA] box-border outline-none text-[#125B57] font-[400] text-[16px] leading-[24px] tracking-[-2.3%] resize-none`}
                        />

                    {/* Add a photo Button */}
                    <AddPhoto/>

                </div>
            </section>


            {/* Post button */}
            <section className="flex justify-center">
            <PostButton btn_name="POST"/>
            </section>
            
        </section>
    </div>
  )
}

export default Discussion