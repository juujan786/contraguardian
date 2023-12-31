import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Analyze = () => {
  const location = useLocation();
  const fileInputRef = useRef();

  let fileHistory = localStorage.getItem("fileHistory")
    ? JSON.parse(localStorage.getItem("fileHistory"))
    : [];

  const fileName = location.state?.selectedFile.name;
  const [selectedFile, setSelectedFile] = useState({
    name: fileName,
    red: `${fileName}'s red content`,
    orange: `${fileName}'s orange content`,
    green: `${fileName}'s green content`,
  });

  // const doesFileAreadyExist = fileHistory.find(
  //   (file) => file.name === selectedFile.name
  // );

  // if (!doesFileAreadyExist) {
  //   fileHistory.unshift(selectedFile);
  //   localStorage.setItem("fileHistory", JSON.stringify(fileHistory));
  // }

  const handleUploadCardClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const allowedExtensions = [".pdf"];
    if (file) {
      const fileNameParts = file.name.split(".");
      const fileExtension = `.${
        fileNameParts[fileNameParts.length - 1]
      }`.toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        setSelectedFile({
          name: file.name,
          red: `${file.name}'s red content.`,
          orange: `${file.name}'s orange content.`,
          green: `${file.name}'s green content.`,
        });
        fileHistory.unshift(selectedFile);
        localStorage.setItem("fileHistory", JSON.stringify(fileHistory));
      } else {
        alert("Only pdf files are allowed!");
      }
    }
  };

  const handleHistoryClick = (fileName) => {
    const file = fileHistory.find((f) => f.name === fileName);
    setSelectedFile(file);
  };

  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="mt-5 flex flex-col md:flex-row md:justify-between w-[1000px] px-5">
        <div className="leftSect mb-8">
          <p className="text-[#6b21e5] font-semibold">
            <span className="font-bold text-[#6b21e5]">Current Files:</span>{" "}
            {selectedFile && selectedFile.name}
          </p>
          <div
            onClick={handleUploadCardClick}
            className="mt-5 gb-white px-4 flex justify-center py-2 rounded-full shadow-blue text-[#6b21e5] font-bold hover:cursor-pointer"
          >
            <input
              type="file"
              className=""
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <p>Uplaod New File</p>
          </div>
          <div className="hidden md:block">
            <h2 className="mt-5 font-bold text-[#6b21e5]">File history</h2>
            {fileHistory.length === 0 ? (
              <p className="font-semibold text-[#6b21e5]">Enpty</p>
            ) : (
              fileHistory.map((file) => (
                <p
                  onClick={(e) => handleHistoryClick(file.name)}
                  className="font-semibold text-[#6b21e5] cursor-pointer mb-2"
                >
                  {file.name ? file.name : ""}
                </p>
              ))
            )}
          </div>
        </div>
        <div className="right">
          <div class="relative mx-auto max-w-[450px] ">
            <ul class="">
              <li class="text-left bg-red-300">
                <label
                  for="accordion-2"
                  class="relative flex flex-col border-b-[1px] border-gray-300"
                >
                  <input class="peer hidden" type="checkbox" id="accordion-2" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div class="relative ml-4 cursor-pointer select-none py-2 items-center pr-12">
                    <h3 class="text-sm  lg:text-base text-red-700">
                      Red Flags
                    </h3>
                  </div>
                  <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                    <div class="px-5 pb-2">
                      <p class="text-sm">
                        {selectedFile ? selectedFile.name : ""}'s red flag
                        content.
                      </p>
                    </div>
                  </div>
                </label>
              </li>
              <li class="text-left bg-orange-300">
                <label
                  for="accordion-3"
                  class="relative flex flex-col border-b-[1px] border-gray-300"
                >
                  <input class="peer hidden" type="checkbox" id="accordion-3" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div class="relative ml-4 cursor-pointer select-none items-center py-2 pr-12">
                    <h3 class="text-sm text-orange-600 lg:text-base">
                      Orange Flags
                    </h3>
                  </div>
                  <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                    <div class="px-5 pb-2">
                      <p class="text-sm">
                        {selectedFile ? selectedFile.name : ""}'s orange flag
                        content.
                      </p>
                    </div>
                  </div>
                </label>
              </li>
              <li class="text-left bg-green-300">
                <label
                  for="accordion-4"
                  class="relative flex flex-col border-b-[1px] border-gray-300"
                >
                  <input class="peer hidden" type="checkbox" id="accordion-4" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div class="relative ml-4 cursor-pointer select-none items-center py-2 pr-12">
                    <h3 class="text-sm text-green-700 lg:text-base">
                      Green Flags
                    </h3>
                  </div>
                  <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                    <div class="px-5 pb-2">
                      <p class="text-sm">
                        {selectedFile ? selectedFile.name : ""}'s green flag
                        content.
                      </p>
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
