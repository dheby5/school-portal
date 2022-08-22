import React from "react";
import ImageTex from "../../assets/assembly-4.jpg";
import ImageBuilding from "../../assets/building.jpg";
import ImageCsc from "../../assets/csc.jpg";
import ImageEnveroment from "../../assets/Enveronment.jpg";
import ImageExcercise from "../../assets/excercise.jpg";
import ImageFulani from "../../assets/fulani.jpg";
import BackgroundImage from "../../assets/logo.png";
import ImageBagde from "../../assets/New-Badge.png";
import Imageprinciple from "../../assets/principal.jpg";
import ImageContent from "../../assets/pupil.jpg";
import ImageSenthforth from "../../assets/sentforth.jpg";
import Imagespeech from "../../assets/speech.jpg";
import ImageText from "../../assets/students.jpg";
import ImageWall from "../../assets/wall.jpg";

function Home() {
  return (
    <>
      <div className="flex">
        <img src={BackgroundImage} alt="images" className="images" />
      </div>
      <img src={ImageBuilding} alt="images" className="building" />
      <div className="image">
        <img src={ImageText} alt="images" className="myImage" />
        <img src={ImageTex} alt="images" />
      </div>
      <div className="pupil">
        <img src={ImageContent} alt="images" className="my-student" />
        <div className="about-my-school">
          <h1>About Us</h1>
          <p className="history">
            The school was founded by a fashionist and a programmer,
            <br /> Deborah Olasumbo Oluwaseun (phd in Computer Science).
            <br />
            The school began operations on
            <br /> the 17th of January, 2001 as a nursery and primary
            <br /> school known as Debee. It changed name to Himma in
            <br /> March 2002. The establishment was to meet the demand <br />
            of parents for qualitative education. The school moved to its
            <br />
            present permanent site with its new motto: ‘Ever to Excel’ on <br />
            the 1st of January, 2003. The junior secondary arm of the college
            <br />
            came into being in 2005 and it became a full-fledged secondary
            <br />
            school with the commencement of the senior secondary school in 2007.
          </p>
        </div>
      </div>
      <div className="the-founder">
        <h1 className="college">
          Welcome to HIMMA COLLEGE
          <br />
          Founder's Message
        </h1>
        <p className="speech">
          Dear Parent, as you decide the school in which you will repose the
          socio-
          <br />
          academic destiny of your child, in other words as you choose the
          “Destiny
          <br /> Partner” of your child, I urge you to consider Himma
          International College (HIC).
          <br /> We have, since 2000, pursued this vision: “To train students
          that will
          <br />
          be distinguished in character and learning, and students that will be{" "}
          <br />
          employable and adaptable to life and living.
        </p>
      </div>
      <div className="himma">
        <div className="excercise">
          <img src={ImageExcercise} alt="image" className="csc" />
          <div className="motiv">
            <h1 className="mission">MISSION</h1>
            <p>
              To provide a qualitative education at an <br />
              affordable price througha competent
              <br /> and a well motivated workforce in a conducive learning
              environment.
            </p>
          </div>
        </div>
        <div className="sentforth">
          <img src={ImageSenthforth} alt="image" className="sentforth-image" />

          <h1 className="mission">VISION</h1>
          <p className="motivation">
            To train students that will be distin-
            <br />
            guished both in character andin learn-
            <br />
            ing, and that will be adaptable and
            <br /> employable to life and living.
          </p>
        </div>
        <div className="values">
          <img src={ImageCsc} alt="image" className="csc" />
          <div className="motiv">
            <h1 className="mission">CORE VALUES</h1>
            <p>Confidence</p>
            <p>Creativity</p>
            <p>Leadership</p>
            <p>Respect</p>
          </div>
        </div>
      </div>
      <div className="schoolwall">
        <div className="surroding">
          <h2>Himma International School</h2>
          <h1>The Citadel Of Greatness, Success and Strenght</h1>
        </div>
        <img src={ImageEnveroment} alt="image" className="enveronment" />
      </div>
      <div className="imgs">
        <div className="img">
          <img src={Imageprinciple} alt="image" className="playground" />
          <img src={ImageWall} alt="image" className="playgrounds" />
          <img src={ImageFulani} alt="image" className="playingGround" />
        </div>
        <div className="img">
          <img src={ImageEnveroment} alt="image" className="playgrounds" />
          <img src={Imagespeech} alt="image" className="playingGround" />
          <img src={ImageEnveroment} alt="image" className="playground" />
        </div>
      </div>
      <div className="bagde">
        <img src={ImageBagde} alt="image" className="barge" />
        <div className="address">
          <h2>Address</h2>
          <h4>Off Dr. Nnamdi Azikwe Way, Behind</h4>
          <h4>NECO State Office</h4>
          <h4>Minna, Niger State</h4>
          <h4>+2348034506088</h4>
          <h4 className="info">info@himmacollege.com</h4>
        </div>
      </div>
      <div className="footer">
        <p>© Copyright - Himma College</p>
      </div>
    </>
  );
}

export default Home;
