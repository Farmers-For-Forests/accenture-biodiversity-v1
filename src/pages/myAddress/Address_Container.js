import React,{useState} from "react";

const Address_Container = () => {
    const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="absolute top-[134px] left-[23px] gap-[18px] w-[322px] max-h-[474px] bg-yellow-100">
      <p className="font-[600] text-[#125B57] text-[24px] leading-[26.4px]">
        Add a new address
      </p>
      <form className="flex flex-col gap-[18px] ">
     

      
      <label  htmlFor="Flat, House no., Building, Company">Flat, House no., Building, Company</label>
            <div
              className={`w-[322px] h-[72px] ${
                focusedInput === "email" ? "border-none" : "border-2 border-[#125B57]"
              } bg-white`}
            >
            
              <input
                type="email"
                placeholder="Email"
                required
                id="password"
                name="Flat, House no., Building, Company"
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                className={`placeholder-custom w-full h-[48px] font-inter font-[300] text-[18px] leading-[21.78]  p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                  focusedInput === "email"
                    ? "border-2 border-[#125B57]"
                    : "border-none"
                } bg-[#FAFAFA]`}
                style={{ boxSizing: "border-box" }}
              />
            </div>
  

  
           
         
          </form>
          
    </div>
  );
};

export default Address_Container;
