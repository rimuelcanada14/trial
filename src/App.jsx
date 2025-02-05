import { ReactTyped } from "react-typed";
import { useState } from "react";
import './App.css'
import { HiH3 } from "react-icons/hi2";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "0px", left: "0px" });

  // Function to move the "No" button to a random position
  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 200) + "px";
    const randomLeft = Math.floor(Math.random() * 200) + "px";
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };
  const handleYesClick = () => {
    setShowMessage(true);
  };
  return (
    <>
      <div>
        <ReactTyped 
          strings={[
            "Hi bud!",
            "How's your day?",
            "First of all, Happy 29 months of love",
            "First of all, Happy 29 months of love, happiness",
            "First of all, Happy 29 months of love, happiness, libog AHHAHA",
            "First of all, Happy 29 months of love, happiness, libog AHHAHA, galit",
            "First of all, Happy 29 months of love, happiness, libog AHHAHA, galit, tuwa",
            "First of all, Happy 29 months of love, happiness, libog AHHAHA, galit, tuwa, at pagtiyatiyaga.",
            "I know you wanted the Mel you had before.",
            "Yung Mel na sweet",
            "Yung Mel na nakakapunta sa inyo",
            "Yung Mel na kakwentuhan si tita",
            "Yung Mel na dati.",
            "Pero alam mo Bud, ikaw kasi yung nagparealize sa akin eh.",
            "Ikaw yung nagparealize na",
            "Ikaw yung nagparealize na dapat maggrow as a person.",
            "Ikaw yung nagparealize na dapat magbago in a nice way.",
            "Ikaw yung nagparealize na dapat mag-mature.",
            "And you don't know how thankful I am kasi naging ganun ako ngayon.",
            "Mel would not be Mel right now without you.",
            "Mel would not be Mel right now kung walang Joanna.",
            "Pero ngayon,",
            "Pero ngayon, set aside muna natin yan.",
            "Starting this February, I am trying to change my personality.",
            "Not in a bad way, but rather, the one that you liked before.",
            "These coming months will be challenging for us kasi we both have our worlds.",
            "Pero I assure you that I will do my best para makagawa ng time para makasama ka.",
            "I mean",
            "I mean...",
            "I mean...who doesn't want to see your precious smile?",
            "I mean...who doesn't want to see your stunning eyes?",
            "I mean...who doesn't want to see your cute cheeks?",
            "I mean...who doesn't want to see your kissable lips?",
            "And I want to see those this month.",
            "Joanna Marie Quero",
            "Joanna Marie Quero<br/>My baby bud",
            "Joanna Marie Quero<br/>My baby bud<br/>Will you marry me?",
            "Joanna Marie Quero<br/>My baby bud<br/>Ay di pa pala ito yonnnn mali maliii",
            "Joanna Marie Quero<br/>My baby bud<br/>Will you be my date for our monthsary, Valentine's Day, and your birthday?",
          ]} 
          typeSpeed={50}
          backSpeed={30}
          showCursor={false}
          onComplete={() => setShowButtons(true)}
        />

        {showButtons && !showMessage && (
          <div style={{ marginTop: "20px" }}>
            <button
              style={{
                padding: "10px 50px",
                fontSize: "16px",
                marginRight: "10px",
                cursor: "pointer",
                border: "1px black solid",
                borderRadius: "20px"
              }}
              onClick={handleYesClick}
            >
              Yes!
            </button>
            <button
              style={{
                padding: "10px 30px",
                fontSize: "16px",
                cursor: "pointer",
                border: "1px black solid",
                borderRadius: "20px"
              }}
              onClick={handleYesClick}
            >
              Of course!
            </button>
            <button
              onMouseEnter={moveNoButton} // Moves when hovered
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                position: "absolute",
                top: noButtonPosition.top,
                left: noButtonPosition.left,
                transition: "all 0.3s ease",
              }}
            >
              No
            </button>
          </div>
        )}
        {showMessage && (
          <div className="message"
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#ffcccb",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <h3>
              Please reserve these dates baby bud:
            </h3>
            <p>
              February 6 or 7 - Monthsary Secret Place<br/>
              February 18 or 20 - Birthday and Valentine's Celeberation<br/>
            </p> 
            <br/>
            Please screenshot and send to Babi for confirmation. <br/>
            <div className="text-center">I love you so muchie!</div>
            <div className="text-center">😚💗😚💗</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
