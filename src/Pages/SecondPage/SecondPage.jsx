import React from "react";
import "./SecondPage.css"; // Oddiy CSS
import Doctor2 from "/public/img/Doctor2.png";

const SecondPage = () => {
  return (
    <div className="hero">
      <div className="left">
        <img src={Doctor2} alt="Doctor" className="doctorImg" />
      </div>
      <div className="center">
        <h1>
          K.A.A-ga xush kelibsiz. <br />
          Markaziy kasalxona
        </h1>
        <p>
          K.A.A Hospital — bu sog‘ligingiz haqida chin dildan qayg‘uradigan joy.
          Biz uchun har bir bemor muhim, shuning uchun sizni oddiy raqam
          sifatida emas, inson sifatida qabul qilamiz. Bu yerda sizni iliq
          muhit, e’tiborli shifokorlar va samimiy g‘amxo‘rlik kutmoqda.Tajribali
          jamoamiz har kuni sog‘ligingizni tiklash va yaxshilash uchun jonbozlik
          bilan ishlaydi. MediPoint’da siz o‘zingizni yolg‘iz his etmaysiz — biz
          siz bilan birgamiz, har qadamda.
        </p>
        <div className="DocName">Robert Smith.</div>
      </div>
      <div className="right">
        <button className="actionBtn">
          <h4> Request Appointment</h4>
          <span></span>
        </button>
        <button className="actionBtn">
          <h4> Find Doctors </h4>
          <span></span>
        </button>
        <button className="actionBtn">
          <h4> Find Locations</h4>
          <span></span>
        </button>
        <button className="actionBtn">
          <h4> Emergency Contact</h4>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
