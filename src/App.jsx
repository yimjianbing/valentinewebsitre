import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "aw man",
      "don't be a bloke",
      "Really?",
      "Really sure?",
      "PLS PLS PLS PLS",
      "u r EVIL",
      "EVIL GF!",
      "last chance!",
      "u r making me cri",
      "I'll be sad :(",
      "WAHHHHHHH!",
      "but i lurv u!",
      "u r wicked?",
      "wicked gf?",
      "I HATE YOU jk i love u",
      ";(",
      "Is that your final answer?",
      "stop being such a BLOKE",
      "BLOKE EVIL GF",
      "you're breaking my heart ;(",
      "plsss? :( You're breaking my heart",
      "i wil lgive u 1 million kisses if u say yes",
      "oki i cri now goodbye",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-3xl font-bold my-4">
            Ok Yayyyyy!!! I LOVE YOU SO MUCH HEHEHEHEH SEE U ON FRIDAY MUAHAHA {"<"}3 GOAT GF
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            To my dearest Janelle,
          </h1>
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/yimjianbing/valentinewebsitre"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️ 
      </span>
      &nbsp;by jb 
    </a>
  );
};
