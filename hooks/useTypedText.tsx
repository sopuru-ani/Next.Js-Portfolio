import { useState, useEffect } from "react";

function useTypedText(text: string = "", speed: number = 100) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) return setDisplayed("");

    setDisplayed(""); // clear old text immediately
    let i = -1;

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

export default useTypedText;
