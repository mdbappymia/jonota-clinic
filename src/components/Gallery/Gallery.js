import React from "react";
import { Container } from "react-bootstrap";
import "./Gallery.css";

const Gallery = () => {
  return (
    <Container className="my-5">
      <h1 className="services-headinh text-center fw-bold mb-5">Our Gallery</h1>
      <div className="gallery-container">
        <div>
          <img
            className="gallery-img"
            src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBiZWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
          <p className="gallery-caption">Clinic Bed</p>
        </div>
        <div>
          <img
            className="gallery-img"
            src="https://media.gettyimages.com/photos/interior-of-new-empty-hospital-room-picture-id1153684245?s=612x612"
            alt=""
          />
          <p className="gallery-caption">Clinic Multi Bed One Room</p>
        </div>
        <div>
          <img
            className="gallery-img"
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpbmljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
          <p className="gallery-caption">Front Side</p>
        </div>
        <div>
          <img
            className="gallery-img"
            src="https://image.freepik.com/free-photo/inside-clinic-with-dentists-chairs_13339-267784.jpg"
            alt=""
          />
          <p className="gallery-caption">Inside Clinic</p>
        </div>
        <div>
          <img
            className="gallery-img"
            src="https://static.toiimg.com/thumb/75511449.cms?resizemode=4&width=400"
            alt=""
          />
          <p className="gallery-caption">Doctor Chember</p>
        </div>
        <div>
          <img
            className="gallery-img"
            src="https://www.internationalsos.com/-/media/corporate/files/images/clinics/primary_care_clinic_cropped.jpg?h=461&la=en&w=1000&hash=DFFA872A45062FABB4F25E3D79C2B2315A7B3102"
            alt=""
          />
          <p className="gallery-caption">Counter</p>
        </div>
        <div>
          <img
            className="gallery-img"
            src="https://www.mayoclinic.org//-/media/kcms/gbs/research/images/2018/11/13/17/37/mayo-clinic-research-education-3660130-0025r-banner.jpg"
            alt=""
          />
          <p className="gallery-caption">Education and Research</p>
        </div>
        <div>
          <img
            className="gallery-img"
            src="https://media.istockphoto.com/photos/smiling-female-doctor-with-telephone-to-ear-picture-id903613870"
            alt=""
          />
          <p className="gallery-caption">Help Center</p>
        </div>
        <div>
          <img
            className="gallery-img"
            src="https://www.virohan.com/blog/wp-content/uploads/2021/07/operation-theater-6142851_640-min.jpg"
            alt=""
          />
          <p className="gallery-caption">Operation Theater</p>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
