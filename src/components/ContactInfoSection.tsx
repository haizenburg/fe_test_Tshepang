import { useState } from "react";
import { Mail, Phone, Eye } from "lucide-react";
import { Artist } from "@/lib/api";

const ContactInfoSection = ({ artist }: { artist: Artist }) => {
  const [showContact, setShowContact] = useState(false);
  const [showChallenge, setShowChallenge] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [attempts, setAttempts] = useState(0);

  const generateNewSum = () => {
    setNum1(Math.floor(Math.random() * 90) + 10);
    setNum2(Math.floor(Math.random() * 90) + 10);
  };

  const handleShowInfo = () => {
    setShowChallenge(true);
    generateNewSum();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (parseInt(answer) === num1 + num2) {
      setShowContact(true);
      setShowChallenge(false);
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        localStorage.setItem("contactBlocked", "true");
        setShowChallenge(false);
      } else {
        generateNewSum();
      }
      setAnswer("");
    }
  };

  const maskedEmail = artist.email.replace(/(.{2})(.*)(@.*)/, "$1****$3");
  const maskedPhone = artist.phone.replace(/(\d{3})(.*)(\d{4})/, "$1-***-$3");

  if (localStorage.getItem("contactBlocked") === "true") {
    return (
      <div className="text-center mt-4">
        Contact information is blocked due to too many incorrect attempts.
      </div>
    );
  }

  return (
    <div className="my-4">
      <h3 className="font-semibold mb-2">Contact Information:</h3>
      {!showContact && !showChallenge && (
        <button
          onClick={handleShowInfo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center mb-4"
        >
          <Eye className="mr-2" size={20} />
          Show Info
        </button>
      )}
      {showChallenge && (
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="block mb-2">
            Solve this to reveal contact info: {num1} + {num2} =
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="ml-2 p-1 border rounded text-black"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      )}
      <div className="flex items-center mb-2">
        <Mail className="mr-2" size={20} />
        <span>{showContact ? artist.email : maskedEmail}</span>
      </div>
      <div className="flex items-center">
        <Phone className="mr-2" size={20} />
        <span>{showContact ? artist.phone : maskedPhone}</span>
      </div>
    </div>
  );
};

export default ContactInfoSection;
