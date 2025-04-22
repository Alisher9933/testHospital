import React from 'react';
import Tish from "../../../public/Icons/Tish.png"
import Koz from "../../../public/Icons/Ko'z.png"
import Dori from "../../../public/Icons/Dori.png"
import Yurak from "../../../public/Icons/Yurak.png"

import './ThirdPage.css';

const Departments = () => {
  return (
    <div className="departments-container">
      <div className="departments-header">
        <h2 className="section-subtitle">Bo'limlar</h2>
        <h1 className="section-title">Bizning tibbiy xizmatlarimiz</h1>
      </div>
      
      <div className="departments-box">
        {/* Dental Care */}
        <div className="department-card">
          <div className="department-icon">
            {/* Replace with your dental care image */}
            <img src={Tish} alt="Dental Care" />
          </div>
          <h3 className="department-title">Tish parvarishi</h3>
          <p className="department-description">
            Tishlarimizni sog‘lom saqlash uchun muntazam tekshiruvlar va professional xizmatlar taqdim etiladi.
          </p>
        </div>
        
        {/* Eye Care */}
        <div className="department-card">
          <div className="department-icon">
            {/* Replace with your eye care image */}
            <img src={Koz} alt="Eye Care" />
          </div>
          <h3 className="department-title">Ko'z parvarishi</h3>
          <p className="department-description">
            Ko‘z salomatligingizni saqlash uchun zamonaviy usullar va tajribali mutaxassislar bilan xizmat ko‘rsatiladi.
          </p>
        </div>
        
        {/* Medicine */}
        <div className="department-card">
          <div className="department-icon">
            {/* Replace with your medicine image */}
            <img src={Dori} alt="Medicine" />
          </div>
          <h3 className="department-title">Dorilar</h3>
          <p className="department-description">
          Dorilarni sifatli va xavfsiz tarzda taqdim etish orqali sizning salomatligingizni yaxshilaymiz.
          </p>
        </div>
        
        {/* Cardiology */}
        <div className="department-card">
          <div className="department-icon">
            {/* Replace with your cardiology image */}
            <img src={Yurak} alt="Cardiology" />
          </div>
          <h3 className="department-title">Kardiologiya</h3>
          <p className="department-description">
          yurak sog‘ligingizni kuzatib borish va zarur davolanishni ta’minlash uchun professional kardiologik yordam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Departments;