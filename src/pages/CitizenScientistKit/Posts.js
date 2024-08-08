import React from "react";
import Top_Header from "../../components/Common_Components/Top_Header";
import Navbar from "./Navbar";
import PostLists from "./PostLists";
import AddIcon from "@mui/icons-material/Add";

const Posts = () => {
  return (
    <div className="w-full box-border">
      <Top_Header title="Citizen scientist kit" />
      <section className="w-full mt-[14px] flex justify-center">
        <Navbar />
      </section>

      <section className="w-full  box-border px-5">
        <section>
          <PostLists isImage={true}  name="Rajesh Shetty" occupation="environmental science tracher" place="Mumbai " day="Yesterday"/>
          <PostLists isImage={false}  name="Richard" Occupation="Engineer" place="USA" day="2 days ago" />
        </section>

        <section className="w-full flex justify-end py-5">
          <button className="ml-auto px-[15px] py-[13px] flex justify-center items-center bg-[#125B57] gap-[8px] text-white rounded-[9px]">
            <AddIcon  />
            <p className="font-inter font-[600] text-[12px] leading-[14.52px] tracking-[-2.3%] text-[#FFFFFF]">
              Upload
            </p>
          </button>
        </section>
      </section>
    </div>
  );
};

export default Posts;
