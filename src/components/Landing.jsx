import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import logo from "../assets/laf_logo.png";
import lost from "../assets/lost.svg";
import found from "../assets/found.svg";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
     
      <div className="landing">
        <div className="landing-animation">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_s3PG4r.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
       <div className="landing-right"> 
       <div className="landing-nav">
          <img src={logo} alt="" className="landing-logo" />
          <div className="landing-btns">
            <Link to={"/signup"}>
              <MDBBtn rounded style={{ backgroundColor: "#4ca7b5" }}>
                Sign Up
              </MDBBtn>
            </Link>
            <Link to={"/login"}>
              <MDBBtn rounded style={{ backgroundColor: "#068a8f" }}>
                Login
              </MDBBtn>
            </Link>
          </div>
        </div>
        <div className="landing-text">
          <h1>
            Find What's Lost,
            <br /> Rediscover Possibilities
          </h1>
          A portal where students from the institute can update on their belongs which has been misplaced or returned back.
          <Link to={"/login"}>
            <MDBBtn
              style={{
                display: "block",
                backgroundColor: "#06868f",
                color: "white",
                boxShadow: "none",
                marginTop: "3rem",
                fontSize: "1.3rem",
                borderRadius: "10px",
              }}
            >
              Get Started
            </MDBBtn>
          </Link>
        </div>
        </div>
      </div>
      
    </>
  );
};
export default Landing;
