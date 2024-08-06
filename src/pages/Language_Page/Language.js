import React from 'react'
import Top_Header from '../../components/Common_Components/Top_Header'
import Language_Component from './Language_Component'

const Language = () => {
  return (
    <div className=" w-[360px]   mx-auto">
      <Top_Header title="Language" />
      <section className="w-[314px] h-[94px] mt-[134px] mx-auto rounded-[10px] bg-[#125B57]">
        <Language_Component language="English"/>
        <Language_Component language="Marathi"/>
      </section>
      
      
    </div>
  )
}

export default Language