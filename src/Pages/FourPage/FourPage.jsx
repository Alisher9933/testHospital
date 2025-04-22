import './FourPage.css';
import Eshitish from "../../../public/Icons/Eshitish.png";
import Shifokor from "../../../public/Icons/Shifokor.png";
import Ambulance from "../../../public/Icons/Ambulance.png";
import Soat from "../../../public/Icons/Soat.png";
import DoctorImage from "../../../public/img/Doctor3.jpg"; // Rasm joyini siz almashtirasiz

const FourPage = () => {
  return (
    <section className="speciality-section">
      <div className="speciality-content">
        <div className="left-side">
          <h4 className="highlight-text">Why Choose Us</h4>
          <h2 className="main-heading">What's Our Speciality</h2>
          <p className="description">
            On the other hand we denounce with righteous indignation.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <img src={Eshitish} alt="Professional Staff" className="feature-icon" />
              <div>
                <h4 className="feature-title">Professional Staff</h4>
                <p className="feature-text">
                  On the other hand we denounce with righteous indignation and disonounce with righteous indignation.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <img src={Ambulance} alt="Emergency Case" className="feature-icon" />
              <div>
                <h4 className="feature-title">Emergency Case</h4>
                <p className="feature-text">
                  On the other hand we denounce with righteous indignation and disonounce with righteous indignation.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <img src={Shifokor} alt="Qualified Doctors" className="feature-icon" />
              <div>
                <h4 className="feature-title">Qualified Doctors</h4>
                <p className="feature-text">
                  On the other hand we denounce with righteous indignation and disonounce with righteous indignation.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <img src={Soat} alt="24/7 Services" className="feature-icon" />
              <div>
                <h4 className="feature-title">24/7 Services</h4>
                <p className="feature-text">
                  On the other hand we denounce with righteous indignation and disonounce with righteous indignation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <img src={DoctorImage} alt="Doctor" className="doctor-image" />
        </div>
      </div>
    </section>
  );
};

export default FourPage;
