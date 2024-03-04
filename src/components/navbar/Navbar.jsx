import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  const currentUser = {
    id: 1,
    username: "Monyuy",
    isSeller: true,
  };

  return (
    <>
      <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <Link to="/" className="link">
              <span className="text">Tutor Hub</span>
            </Link>
            <span className="dot">.</span>
          </div>
          <div className="links">
            <span className="text">Find tutors</span>
            <span className="text">Explore</span>
            {!currentUser?.isSeller && (
              <span className="text">Become a tutor</span>
            )}
            <span className="text">Sign In</span>
            {!currentUser && <button>Join</button>}
            {currentUser && (
              <div className="user" onClick={() => setOpen(!open)}>
                <img
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>{currentUser?.username}</span>
                {open && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link className="link" to="/lessons">
                          Lessons
                        </Link>
                        <Link className="link" to="/addlesson">
                          Add New Lesson
                        </Link>
                      </>
                    )}
                    <Link className="link" to="/bookings">
                      Bookings
                    </Link>
                    <Link className="link" to="/messages">
                      Messages
                    </Link>
                    <Link className="link" to="/logout">
                      Log Out
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {(active || pathname !== "/") && (
          <>
            <hr />
            <div className="menu">
              <span>Englisn Covsersational classes</span>
              <span>Business english lessons</span>
              <span>Online english Grammar lessons</span>
              <span>English Speeking Courses</span>
              <span>Online English Lessons for Beginners</span>
              <span>Advanced English classes</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
