import './NotFound.css'
import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
const NotFound = ({value}) => {
  let navigate = useNavigate();

  useEffect(() => {
    const redirectHome = setTimeout(() => {
      navigate("/login");
    }, 8000);
    return () => clearTimeout(redirectHome);
  }, [navigate]);

  return (
    <>
      {/* <Header value={value}/> */}
      <div className="container-fluid py-5 extend-height">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="jumbotron bg-white text-center">
              <h1 className="h2">404 - Page Not Found</h1>
              <p className="lead">Sorry, the page you are looking for does not exist.</p>
              <p>Redirecting to the previous page in 8 seconds...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;