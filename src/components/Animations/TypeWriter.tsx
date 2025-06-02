import { useEffect, useState } from "react";

const Typewriter = ({
  text = "TypeWriter",
  speed = 150,
  pause = 1000,
  shouldDelete = true, // New prop
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
    <span>
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default Typewriter;
