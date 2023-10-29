import React from "react";
import HomeAbout from "../components/HomeAbout";
import "./App.css";

export default function Home() {
  return (
    <div className="centered-text bold-text">
      <h1>Welcome to the Job Blog </h1>
      <HomeAbout />
      <p className="bold-text">
        Go to the Sign Up to look at what others do for work.
      </p>
      <p>
        Look for open jobs @<a href="https://www.indeed.com/">Indeed.com</a>
      </p>
      <img
        src="https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/indeed-share-image-9581a8.png"
        alt="Indeed Pic"
      ></img>
    </div>
  );
}
