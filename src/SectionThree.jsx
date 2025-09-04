import "./SectionThree.css";
export default function SectionThree() {
  return (
    <>
      <section className="sectionThree col-12 d-flex align-items-center justify-content-center p-5  ">
        <div className=" col-10 p-5 d-flex align-items-center justify-content-center ">
          <div className=" propertis sectionThree container col-12 d-flex align-items-center justify-content-center gap-5 ">
            <div className="imgDiv col-6 d-flex ">
              <img
                className=" col-10 d-flex  "
                src="./public/imgSectionThree.png"
                alt=""
              />
            </div>
            <div className="contentThree d-flex flex-column justify-content-center gap-1">
              <h1>ZX9 </h1>
              <h1>SPEAKER</h1>
              <p>
                Upgrade to premium speakers that are <br /> phenomenally built
                to deliver truly <br /> remarkable sound.
              </p>
              <button className=" btn btn-dark">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
