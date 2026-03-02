import { useState, useEffect } from "react";

function useTypedText(text: string = "", speed: number = 100) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    if (!text) return;

    let i = 1;
    setDisplayed(text.slice(0, i));

    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed]);

  return displayed;
}

export default useTypedText;
