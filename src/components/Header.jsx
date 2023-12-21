import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsCloudUpload } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

const Header = () => {
  // const fileInputRef = useRef(null);
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleUploadCardClick = () => {
  //   fileInputRef.current.click();
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedFile(file);
  //   console.log("Selected file:", file);
  // };

  return (
    <div className="mt-6 px-5">
      <div className="top flex justify-center items-center sm:gap-[50px]">
        <div
          className="uploadCard pt-14 pb-5 bg-white shadow-2xl shadow-blue flex flex-col flex-1 justify-center items-center rounded-2xl  max-w-[320px] max-h-[160px] hover:cursor-pointer "
          // onClick={handleUploadCardClick}
        >
          {/* {selectedFile ? ( */}
            <>
              <FaPlus style={{ color: "#6112e3", fontSize: "1.5rem" }} />
              <p className="text-center font-bold mt-3 text-[#6b21e5]">
                {/* {selectedFile.name} */}
              </p>
            </>
          {/* ) : ( */}
            <>
              <FaPlus style={{ color: "#6112e3", fontSize: "1.5rem" }} />
              <input
                type="file"
                // ref={fileInputRef}
                // onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <p className="text-center font-bold mt-3 text-[#6b21e5]">
                Click to upload your .pdf <br /> or drag and drop
              </p>
            </>
          {/* )} */}
        </div>
        <div className="img max-w-[370px]">
          <img
            className="responsive-image w-[100%]"
            src="images/vector.jpg"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-xl font-bold text-center mt-14 text-[#6b21e5]">
        How it works
      </h1>
      <div className="cards mb-5 flex flex-wrap justify-center gap-10 mt-8">
        <div className="card flex flex-col pt-5 pb-5 items-center max-w-[250px] max-h-[300px] bg-white shadow-black rounded-[40px]">
          <BsCloudUpload style={{ fontSize: "2.5rem", textAlign: "center" }} />
          <h2 className="text-center mt-2 text-md font-extrabold">
            Upload your GmbH contract
          </h2>
          <p className="text-center font-bold text-sm mt-3  px-[16px]">
            Transmit your .pdf contracts hassle-free using intuitive upload
            funtion
          </p>
        </div>
        <div className="card flex flex-col pt-5 pb-5 items-center max-w-[250px] max-h-[300px] bg-white shadow-black rounded-[40px]">
          <IoIosSearch style={{ fontSize: "2.5rem", textAlign: "center" }} />
          <h2 className="text-center mt-2 text-md font-extrabold">
            Let our system analyze your contracts
          </h2>
          <p className="text-center font-bold text-sm mt-3  px-[16px]">
            Our systems will analyze your contracts for any mistakes or lacking
            information as well as potential risks in your conditions.
          </p>
        </div>
        <div className="card flex flex-col pt-5 pb-5 items-center max-w-[250px] max-h-[300px] bg-white shadow-black rounded-[40px]">
          <FaCircleCheck style={{ fontSize: "2.5rem", textAlign: "center" }} />
          <h2 className="text-center mt-2 text-md font-extrabold">
            See results in real time
          </h2>
          <p className="text-center font-bold text-sm mt-3  px-[16px]">
            Get intuitive real time feedback on the legal security of your
            contracts, grouped by red, orange and green flags.
          </p>
        </div>
      </div>
      <div className="disclaimer my-10 flex justify-center">
        <p className="max-w-[1000px] font-bold text-sm text-center">
          Disclaimer: This tool is for informational purposes only. It provides
          an analysis of GmbH contracts for potential errors and missing
          information. It does not constitute legal advice. We make no
          guarantees regarding its accuracy or completeness. Users should
          consult with legal professionals for advice. Use of this tool is at
          your own risk, and we are not liable for any consequences. By using
          this tool, you agree to these terms.
        </p>
      </div>
    </div>
  );
};

export default Header;
