import { Image } from "react-bootstrap";
import Story from "../../image/story-thubnail.png";
import "../../style/story.css";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import ImagePrompt from "./ImagePrompt";
import list from "../../Data/data.json"
import { Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContextProvider";
import Regenerate from "./Regenerate";
import { Link } from "react-router-dom";

function Storylist(props) {
    const { List, setList } = useContext(UserContext);
    const storedData = localStorage.getItem('List');
   // const parsedData = JSON.parse(storedData); 
    const parsedData = list;

    console.log("parsedData", parsedData)


    const [show, setShow] = useState(false);
    const [imagePrompt, setImagePrompt] = useState("");

    const handleClose = () => setShow(false);

    const handleShow = (image_prompt) => {
        setImagePrompt(image_prompt);
        setShow(true);
    };
    const [ImageUrl ,setImageUrl]=useState("")

    const handleGenerateImage = (image_prompt) => {
        setImageUrl(image_prompt)
        console.log("Generated Image Prompt:", image_prompt);
    };

    const [showContinue, setShowContinue] = useState(false);
    const handleCloseContinue = () => setShowContinue(false);
    const handleShowContinue = () => setShowContinue(true);

    const navigate = useNavigate();
    console.log("imagePrompt",imagePrompt)
    console.log("ImageUrl",ImageUrl)

    function Schedulecontinue() {
        navigate('/schedule')
    }

    
    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);


    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content ">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                {parsedData && parsedData.chapters
                                    && parsedData.chapters
                                        .map((item, key) => (
                                            <div className="story-list" key={key}>
                                                <h2>
                                                   {item.title}
                                                </h2>
                                                <p>{item.content}</p>
                                                <div className="thubnail">
                                                    <Image
                                                        src={Story}
                                                        alt="story"
                                                        onClick={() => handleShow(item.imagePrompt)}
                                                    />
                                                </div>
                                            </div>
                                        ))}

                                <div className="btn-list">
                                    <button className="btn blue-gradient-btn" onClick={()=>handleShows()}>
                                        <span>Regenerate Story</span>
                                    </button>
                                    <button
                                        className="btn blue-gradient-btn"
                                        onClick={handleShowContinue}
                                    >
                                        <span>Continue</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Regenerate    shows={shows}
                        handleCloses={handleCloses} />
                    {/* data={imagepropmt}  */}
                    <ImagePrompt
                        show={show}
                        handleClose={handleClose}
                        onGenerateImage={handleGenerateImage}
                        imagePrompt={imagePrompt}
                    />
                    <Modal
                        show={showContinue}
                        onHide={handleCloseContinue}
                        id="generat-story"
                    >
                        <Modal.Header
                            closeButton
                            style={{ borderTop: "1px solid rgba(255,255,255, 0.1)" }}
                        >
                            <Modal.Title>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                >
                                    <g opacity="0.5">
                                        <path
                                            d="M18 31H21V25H27V31H30V22L24 17.5L18 22V31ZM16 33V21L24 15L32 21V33H25V27H23V33H16Z"
                                            fill="white"
                                        />
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="47"
                                            height="47"
                                            rx="23.5"
                                            stroke="white"
                                        />
                                    </g>
                                </svg>
                                <h2>StoryScape!</h2>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5 className="text-center m-5">
                                Are you sure you have read this story?
                            </h5>
                            <div className="text-center">
                                <div className="btn blue-gradient-btn"  onClick={Schedulecontinue}>
                                    <span>Confirm & Continue</span>
                                </div>

                            </div>
                        </Modal.Body>
                        {/* <Modal.Footer> */}
                        {/* Your modal footer content */}
                        {/* </Modal.Footer> */}
                    </Modal>
                </div>
            </AuthLayout>
        </>
    );
}

export default Storylist;
