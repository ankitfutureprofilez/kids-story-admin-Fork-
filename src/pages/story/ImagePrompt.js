import { Image, Modal } from "react-bootstrap";
import "../../style/model.css";
import { useState, useRef, useEffect } from "react";
import Story from "../../image/story-thubnail.png";
import imageAi from "../../api/imageAi";

function ImagePrompt({ show, handleClose, imagePrompt, onGenerateImage }) {
    const modalTitleStyle = {
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 'normal',
        fontFamily: 'Poppins',
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: 600,
    };

    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const imageRef = useRef(null);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    // const handleGenerateImage = async () => {
    //     setIsLoading(true);

    //     try {
    //         const response = await imageAi.post("/generations", {
    //             prompt: imagePrompt,
    //             style_id: "30",
    //             file: "/Genaratoerimage/data",
    //         });
    //         console.log("response", response)
    //         if (response.headers['content-type'] === 'image/png') {
    //             const imageUrl = URL.createObjectURL(new Blob([response.data], { type: 'image/png' }));
    //             console.log("imageUrl", imageUrl)
    //             setData(imageUrl);

    //             if (imageUrl) {
    //                 const link = document.createElement("a");
    //                 link.href = "../../Genaratoerimage/data";
    //                 link.download = "data.png";
    //                 document.body.appendChild(link);
    //                 link.click();
    //                 document.body.removeChild(link);
    //             } else {
    //                 console.error('No image data available for download.');
    //             }
    //         } else {
    //             console.error('Invalid image data received from the server.');
    //         }
    //     } catch (error) {
    //         console.error('Error generating or downloading image:', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

const handleGenerateImage =async (e)=>{
    e.preventDefault();
    setIsLoading(true);
}


    useEffect(() => {
        setData(imagePrompt);
    }, [show]);

    return (
        <>
            <Modal show={show} onHide={handleClose} id="generat-story">
                <Modal.Header closeButton style={{ borderTop: '1px solid rgba(255,255,255, 0.1)' }}>
                    <Modal.Title className="modal-image" style={modalTitleStyle}>
                        Generate Image
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Image Prompt"
                            name="data"
                            value={imagePrompt}
                            onChange={(e) => setData(e.target.value)}
                            className="input_field form-control"
                            id="password_field"
                            style={{
                                background: '#0B1024',
                                borderRadius: '50px',
                                width: '710px',
                                height: '66px',
                                color: 'white',
                            }}
                        />
                    </div>
                    <div className="text-center m-3">
                        <div className="btn blue-gradient-btn" onClick={handleGenerateImage}>
                            Generate
                        </div>

                    </div>

                    <div className="d-flex justify-content-around gap-3">
                        {isLoading ? (
                            <div className="thumbnail">
                                <div className="text-left" style={{ width: '401px', height: '286px', borderRadius: '8.833px', background: 'black' }}>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10Z"
                                                fill="url(#paint0_angular_140_259)"
                                            />
                                            <defs>
                                                <radialGradient id="paint0_angular_140_259" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) rotate(90) scale(10)">
                                                    <stop stopColor="#9054D9" />
                                                    <stop offset="1" stopColor="#A04DFF" stopOpacity="0" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                        Image Generating...
                                    </p>
                                    <Image ref={imageRef} src={Story} alt="story" onLoad={handleImageLoad} />
                                </div>
                            </div>
                        ) : (
                            <Image ref={imageRef} src={data} alt="not found" className="img-fluid" onLoad={handleImageLoad} />
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImagePrompt;
