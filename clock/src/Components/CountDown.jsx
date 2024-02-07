import React, { useContext, useEffect, useState } from "react";
import tickingSound from "../assets/ticking-clock_1-27477.mp3";
import { AppContext } from "./Context";

export default function CountDown() {
    
    useEffect(() => {
        document.title = "CountDown";
      }, []);

  const newYear = new Date("Jan 1, 2025 00:00:00").getTime();
  const [difference, setDifference] = useState(newYear - new Date().getTime());
  const audio = new Audio(tickingSound);
  const {dark} = useContext(AppContext)

  useEffect(() => {
    audio.play();
    audio.loop = true;
  
    const intervalId = setInterval(() => {
      setDifference(prevDifference => {
        const currentDate = new Date().getTime();
        const newDifference = newYear - currentDate;
        return newDifference;
      });
    }, 1000);
  
    // Clean up interval and audio when the component is unmounted
    return () => {
      clearInterval(intervalId);
      audio.pause();
    };
  }, []);

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const renderPage = () => {
    if (difference <= 0) {
      return (
        <div id="new-year-div">
          <svg
            className="bg"
            style={{ top: "10vh", left: "5vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            className="bg"
            style={{ top: "90vh", left: "55vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            className="bg"
            style={{ top: "47vh", left: "7vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            className="bg"
            style={{ top: "78vh", left: "88vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            className="bg"
            style={{ top: "59vh", left: "69vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            className="bg"
            style={{ top: "85vh", left: "36vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            className="bg"
            style={{ top: "12vh", right: "5vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            className="bg"
            style={{ top: "83vh", left: "4vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            className="bg"
            style={{ top: "15vh", left: "55vw" }}
            width="2vmax"
            height="2vmax"
            viewBox="0 0 20.829 20.829"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="winter" transform="translate(-1.586 -1.586)">
                {" "}
                <circle
                  id="secondary"
                  fill="#4acade"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                ></circle>{" "}
                <path
                  id="primary"
                  d="M12,9V5M9.88,9.88,7.05,7.05m2,5H5m4.88,2.12L7.05,17M12,19V15m5,2-2.83-2.83M19,12H15m2-4.95L14.12,9.88M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M14,3,12,5,10,3"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-3"
                  data-name="primary"
                  d="M4.22,7.05H7.05V4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,14l2-2L3,10"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-5"
                  data-name="primary"
                  d="M7.05,19.78V16.95H4.22"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-6"
                  data-name="primary"
                  d="M14,21l-2-2-2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-7"
                  data-name="primary"
                  d="M19.78,16.95H16.95v2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-8"
                  data-name="primary"
                  d="M21,10l-2,2,2,2"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
                <path
                  id="primary-9"
                  data-name="primary"
                  d="M16.95,4.22V7.05h2.83"
                  fill="none"
                  stroke={dark ? "#D0D5FA" : "#243c53"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.062279"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          
          <div id="head">HAPPY NEW YEAR</div>
          <div id="year">
            <span className="year-num y1">2</span>
            <span className="year-num y2">0</span>
            <span className="year-num y3">2</span>
            <span className="year-num y3">4</span>
          </div>
        </div>
      );
    } else {
      return (
        <div id="clock-time">
          <div id="clock-content">
            <div className="time-head">days</div>
            <div className="days time">{days < 10 ? "0" + days : days}</div>
          </div>
          <div id="clock-content">
            <div className="time-head">hours</div>
            <div className="hours time">{hours < 10 ? "0" + hours : hours}</div>
          </div>
          <div id="clock-content">
            <div className="time-head">minutes</div>
            <div className="minutes time">
              {minutes < 10 ? "0" + minutes : minutes}
            </div>
          </div>
          <div id="clock-content">
            <div className="time-head">seconds</div>
            <div className="seconds time">
              {seconds < 10 ? "0" + seconds : seconds}
            </div>
          </div>
        </div>
      );
    }
  };

  return renderPage();
}
