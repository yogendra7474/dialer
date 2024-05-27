import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faVolumeMute,
  faVolumeUp,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Dialer = () => {
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(50); // Initial volume value

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  const handleVolumeDrag = (e) => {
    const newVolume = parseInt(e.clientY / 2); // Adjust this factor based on your preference
    setVolume(newVolume);
  };

  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
      {/* Volume Control Section */}
      <div className="tw-flex tw-justify-between tw-w-full">
        <div className=" tw-bg-gray-300">
          <div className=" tw-relative tw-flex tw-items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="tw-h-7 tw-w-24 tw-ml-4"
            />
            {/* Low Volume Icon */}
            <div className=" tw-absolute">
              <FontAwesomeIcon
                icon={faVolumeDown}
                className="tw-text-gray-700 tw-cursor-pointer"
              />
            </div>
            <div className="tw-absolute)">
              <FontAwesomeIcon
                icon={faVolumeUp}
                className="tw-text-gray-700 tw-cursor-pointer"
              />
            </div>
          </div>
          {/* High Volume Icon */}
        </div>
        <div className="tw-flex tw-items-center">
          {/* Mute/Unmute Icon */}
          <FontAwesomeIcon
            icon={muted ? faVolumeMute : faVolumeUp}
            className="tw-text-gray-700 tw-cursor-pointer"
            onClick={toggleMute}
          />
          <span className="tw-text-sky-800 tw-px-1">Mute</span>
          {/* Volume Slider */}
          <div
            className="tw-h-3  bg-gray-300 relative"
            onMouseMove={handleVolumeDrag}
          >
            <div
              className="h-full bg-blue-500"
              style={{ height: `${volume}%` }}
            ></div>
          </div>
        </div>
        {/* Volume Range Input */}
      </div>

      {/* Dialer Keypad Section */}
      <div className="tw-grid tw-grid-cols-3 tw-gap-3 tw-mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
          <button
            key={key}
            className="tw-flex tw-justify-center tw-items-center tw-w-12 tw-h-12 tw-bg-gray-200 tw-text-gray-700 tw-rounded-md tw-shadow-md"
          >
            {key}
          </button>
        ))}
      </div>

      {/* End Session Button */}
      <div>
        <button className="tw-mt-8 tw-px-4 tw-py-1  tw-bg-red-500 tw-text-white tw-rounded-sm tw-shadow-md">
          End Session
        </button>
      </div>
    </div>
  );
};

export default Dialer;
