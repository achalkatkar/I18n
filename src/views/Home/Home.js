import React from 'react';
import "./Home.css"
import i18n from "../../utils/i18n";

function Home() {

    const usersCount = 87;


    return (
        <div className='container'>
          <h1 className='heading'>Internationalization(I18n)</h1>
          <h1 className='msg'> {i18n("welcomeMessage")}</h1>

          <p className='msg'>{i18n("normalMessage")}</p>

          <h3 className='msg'>{i18n("greetingMessage")}</h3>

          <h1 className='msg'>{i18n("endMessage")}</h1>

          <p className='msg'>{i18n("userStatMessage", "<studentCount>", usersCount)}</p>

          <select className='option'
          defaultValue={localStorage.getItem("lang")} 
          onChange={(e)=>{
           localStorage.setItem("lang", e.target.value);
           window.location.reload();
          }}>
            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
            <option value="en">English</option>
          </select>

          
          

        </div>
    )
}

export default Home