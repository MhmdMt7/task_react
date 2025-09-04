import "./SectionSix.css";

export default function SectionSix() {
  return (
    <>
      <div className="sectionSix d-flex container mt-5 col-12">
        <div className="sectionSixleft col-6 d-flex flex-column justify-content-center align-items-center p-5">
          <div className="col-11 d-flex flex-column justify-content-center align-items-start">
            <h1>
              Bringing you the
              <span className="text-danger ">best</span>
              audio gear
            </h1>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div className="sectionSixright col-6">
          <div className="filtar "></div>
        </div>
      </div>
    </>
  );
}
