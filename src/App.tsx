import { useState } from "react";
import "./App.css";

export default function App() {
  const [proceed, setProceed] = useState(false);
  const [message, setMessage] = useState("");

  const handleLanguageClick = (language) => {
    if (language === "English") {
      setMessage("First one to move is gay");
    } else if (language === "Spanish") {
      setMessage("El primero en moverse es gay");
    }
  };

  return (
    <div className="flex flex-col items-start justify-center min-h-screen p-4 bg-[#F7F7F7]">
      {proceed ? (
        <div className="flex flex-col items-center space-y-4 max-w-[850px] w-full">
          <div className="flex flex-col items-center space-y-4">
            <button
              className="bg-[#4285F4] text-white px-4 py-2 rounded-md"
              onClick={() => handleLanguageClick("English")}
            >
              English
            </button>
            <button
              className="bg-[#4285F4] text-white px-4 py-2 rounded-md"
              onClick={() => handleLanguageClick("Spanish")}
            >
              Spanish
            </button>
          </div>
          {message && <p className="text-center text-[#333333]">{message}</p>}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 max-w-[850px] w-full">
          <div className="bg-[#F7F7F7] flex items-center justify-center p-8 rounded-lg">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_3)">
                <path
                  d="M32 4C33.775 4 35.4125 4.9375 36.3125 6.475L63.3125 52.475C64.225 54.025 64.225 55.9375 63.3375 57.4875C62.45 59.0375 60.7875 60 59 60H4.99999C3.21249 60 1.54999 59.0375 0.662494 57.4875C-0.225006 55.9375 -0.212506 54.0125 0.687494 52.475L27.6875 6.475C28.5875 4.9375 30.225 4 32 4ZM32 20C30.3375 20 29 21.3375 29 23V37C29 38.6625 30.3375 40 32 40C33.6625 40 35 38.6625 35 37V23C35 21.3375 33.6625 20 32 20ZM36 48C36 46.9391 35.5786 45.9217 34.8284 45.1716C34.0783 44.4214 33.0609 44 32 44C30.9391 44 29.9217 44.4214 29.1716 45.1716C28.4214 45.9217 28 46.9391 28 48C28 49.0609 28.4214 50.0783 29.1716 50.8284C29.9217 51.5786 30.9391 52 32 52C33.0609 52 34.0783 51.5786 34.8284 50.8284C35.5786 50.0783 36 49.0609 36 48Z"
                  fill="#DB4437"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_3">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-[#333333]">
            Your connection is not private
          </h1>
          <p className="text-center text-[#646464]">
            Attackers might be trying to steal your information (for example,
            passwords, messages, or credit cards).{" "}
            <a
              href="#"
              className="text-blue-600 underline"
              onClick={() => setProceed(true)}
            >
              Learn more
            </a>
          </p>
          <p className="text-sm text-[#646464]">
            NET::ERR_CERT_COMMON_NAME_INVALID
          </p>
          <div className="flex w-full justify-between space-x-4">
            <span
              className="text-[#646464] hover:underline cursor-pointer uppercase"
              onClick={() => setProceed(true)}
            >
              HIDE ADVANCED
            </span>
            <button
              className="bg-[#4285F4] text-white px-4 py-2 rounded-md"
              onClick={() => setProceed(true)}
            >
              Back to safety
            </button>
          </div>
          <p className="text-center text-[#646464]">
            This server could not prove that it is valid; its security
            certificate is from <strong>*.kinsta.com</strong>. This may be
            caused by a misconfiguration or an attacker intercepting your
            connection.
          </p>
          <a
            href="#"
            className="text-[#646464] underline"
            onClick={() => setProceed(true)}
          >
            Proceed to domain (unsafe)
          </a>
        </div>
      )}
    </div>
  );
}
