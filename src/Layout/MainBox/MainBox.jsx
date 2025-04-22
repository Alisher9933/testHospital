import HomePage from "../../Pages/HomePage/HomePage";
import SecondPage from "../../Pages/SecondPage/SecondPage"
import ThirdPage from "../../Pages/ThirdPage/ThirdPage"
import FourPage from "../../Pages/FourPage/FourPage"
import FivePage from "../../Pages/FivePage/FivePage"
import DoctorsTime from "../../Pages/DoctorsTime/DoctorsTime"
import PartnersPage from "../../Pages/PartnersPage/PartnersPage"
import QuestionsPage from "../../Components/QuestionPage/QuestionsPage"
import Map from "../../Components/Map/Map"
function MainBox() {
  return (
    <div>
      <HomePage />
      <SecondPage/>
      <ThirdPage/>
      <FourPage/>
      <FivePage/>
      <DoctorsTime/>
      <QuestionsPage/>
      <PartnersPage/>
      <Map/>
      <br />
    </div>
  );
}

export default MainBox;
