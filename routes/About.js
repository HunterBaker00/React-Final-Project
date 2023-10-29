import React from "react";
import "./App.css";

export default function About() {
  return (
    <div className="centered-text bold-text">
      <h2>About Job Blog</h2>

      <p>
        This site is for people to share the jobs they have and what company
        they work for. It is a place for others to also see what other jobs are
        out there to get ideas if they are satisfied with the career they are
        in.
      </p>
      <p>Here are some examples of companies to look at for a job.</p>
      <img
        className="img-sizing"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgo7ctLCW9KGew0ia-ipNBDJ1LIvDjbCrzxQm-v3c4YfG5-prZ6oFpsCy0ngTPyPG54Ss&usqp=CAU"
        alt="Fast food picture"
      />
      <img
        className="img-sizing img2"
        src="https://3.bp.blogspot.com/-TcAYlW-LCMs/VlsYXcmpXyI/AAAAAAAAA8g/aSgAH8OOEXs/s1600/automobile-logoscar-brand-logos-vector-free-wallpapers-wallpaper-site-bxvdsxbn.gif"
        alt="Car company picture"
      />
    </div>
  );
}
