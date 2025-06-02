import { useEffect, useState } from "react";

// A simple pastel or rainbow-like color palette
const gradientColors = [
  "#ff4d4d",
  "#ff944d",
  "#ffe44d",
  "#94ff4d",
  "#4dffb8",
  "#4dd4ff",
  "#4d7aff",
  "#a64dff",
  "#ff4dd2",
];

const GradientTypeWriter = ({
  text = "GradientTypeWriter",
  speed = 150,
  pause = 1000,
  shouldDelete = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (!isDeleting && index <= text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index + 1);
      }, speed);
    } else if (shouldDelete && isDeleting && index >= 0) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index - 1);
      }, speed);
    }

    if (index === text.length + 1 && !isDeleting && shouldDelete) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    }

    if (index === -1 && isDeleting && shouldDelete) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, pause, shouldDelete]);

  return (
    <span style={{ whiteSpace: "pre", fontWeight: "bold" }}>
      {displayedText.split("").map((char, i) => (
        <span
          key={i}
          style={{
            color: gradientColors[(i + index) % gradientColors.length],
            transition: "color 0.4s ease",
          }}
        >
          {char}
        </span>
      ))}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default GradientTypeWriter;
