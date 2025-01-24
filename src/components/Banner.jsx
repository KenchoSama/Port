import { useState, useEffect } from "react";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Vice President", "Marine Veteran", "Student"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleResumeClick = () => {
    window.open("resume link", "_blank");
  };

  return (
    <section className="banner pt-10 pb-5 bg-cover bg-center animated-background" id="home">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate-fadeIn" : ""}>
                  <h1 className="text-white text-4xl font-bold mb-3">Ken Lopez Martinez</h1>
                  <h2 className="text-indigo-300 text-2xl font-semibold mb-4">
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    I am currently studying computer science at California State University San Marcos.
                    I possess over 5 years of hands-on experience in the field. I was an experienced team
                    leader in the Marine Corps.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    I am a resourceful and reliable electronics technician with a strong track record of
                    troubleshooting, organizing, and repairing various types of basic electronics and
                    communications equipment.
                  </p>
                  <button
                    onClick={handleResumeClick}
                    className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg flex items-center hover:bg-indigo-600 transition-all duration-300"
                  >
                    Resume <ArrowRightCircle size={20} className="ml-2" />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate-zoomIn" : ""}>
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="w-90 h-auto md:w-90 animate-float-y"
                  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
