import { useCallback, useEffect, useState } from "react";

const greetingList = [
  "Hello",
  "こんにちは",
  "Ciao",
  "ສະບາຍດີ",
  "Hallå",
  "你好",
  "안녕하세요",
  "สวัสดี",
  "γεια",
  "مرحبًا",
  "привіт",
  "Bonjour",
];

export const useGreeting = (): [string, number] => {
  const [idx, setIdx] = useState(0);

  const handleNextGreeting = useCallback(() => {
    if (idx >= greetingList.length - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => prev + 1);
    }
  }, [idx]);

  useEffect(() => {
    const id = setTimeout(() => {
      handleNextGreeting();
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [handleNextGreeting]);

  return [greetingList[idx], idx];
};
