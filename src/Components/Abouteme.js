import {  Container } from "react-bootstrap";

const Aboute = () => {
    return (
        <Container>

        <div className="Aboute">
        <h1>About Me</h1>
        <p>
            Hi, saya adalah mahasiswa yang berdomisili di Bandar Lampung 
            dan saat ini saya berkuliah di Politeknik Negeri Lampung.
        </p>
        <p>
            Saya masih tergolong baru dalam dunia pemrograman dengan begitu saya akan terus belajar.
        </p>
        <p>
            Saya berusaha menguasai bahasa pemrograman yang telah saya pelajari.
        </p>
        <p>
            <video controls>
                <source src="video/video-about.webm" type="video/webm"/>
            </video>
        </p>
         
        </div>

        </Container>
    );
};

export default Aboute;