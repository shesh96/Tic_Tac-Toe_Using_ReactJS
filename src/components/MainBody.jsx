import  { useState, useEffect } from "react";
import "./MainBody.css"; // Import your CSS file for styling

function MainBody() {
  const [currentTime, setCurrentTime] = useState(getIndianTime());
  const [currentColor, setCurrentColor] = useState(generateRandomColor());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(getIndianTime());
    }, 1000); // Update every second

    const colorInterval = setInterval(() => {
      setCurrentColor(generateRandomColor());
    }, 2000); // Change color every 2 seconds

    return () => {
      clearInterval(timeInterval);
      clearInterval(colorInterval);
    };
  }, []);

  function getIndianTime() {
    const now = new Date();
    const options = { timeZone: "Asia/Kolkata" };
    return now.toLocaleTimeString("en-IN", options);
  }

  function generateRandomColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return randomColor;
  }

  return (
    <div className="main-body" style={{ color: currentColor }}>
      <h2>Play Now ! 🤩</h2>
      <h1>Tic Tac Toe ! </h1>
      
      <p className="time"> IST: {currentTime}</p>
    </div>
  );
}

export default MainBody;
