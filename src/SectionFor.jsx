import "./SectionFor.css";
import specAup from "./assets/specAup.png";
export default function SectionFor() {
  return (
    <>
      <section className="sectionFor col-12 p-5 ">
        <div className=" container col-11 p-5 ">
          <div className="imgDiv col-12 p-5 d-flex ">
            <img
              className=" col-12 position-relative"
              src={specAup}
              alt="specAup"
            />
            <div className="  contentDiv container d-flex flex-column align-items-center justify-content-center gap-3 col-6 position-absolute">
              <h2>ZX7 SPEAKER</h2>
              <button className=" betoo btn btn-dark">See Product</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
