import "./SectionTow.css";
import speacarHead from "./assets/speacarHead.png";
import soot from "./assets/soot.png";
import iboooodz from "./assets/iboooodz.png";
export default function SectionTow() {
  return (
    <>
      <section className="sectionTow d-flex p-5  ">
        <div className=" container p-5 col-12 gap-2 d-flex align-items-end justify-content-center ">
          <div className="upperSection d-flex flex-column align-items-center - justify-content-center col-4 p-5 ">
            <div className="imgTow col-12 position-relative">
              <img
                className=" col-4 position-absolute"
                src={speacarHead}
                alt="speacarHead"
              />
            </div>
            <div className="content1 col-12 d-flex flex-column align-items-center pt-5 ">
              <h6>HEADPHONES</h6>
              <p>
                Shop
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="upperSection d-flex flex-column align-items-center - justify-content-center col-4 p-5">
            <div className="imgTow col-12 position-relative">
              <img
                className="col-4 position-absolute"
                src={soot} alt="soot"/>
            </div>
            <div className="content1 col-12 d-flex flex-column align-items-center pt-5">
              <h6>SPEAKERS</h6>
              <p>
                Shop
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="upperSection d-flex flex-column align-items-center - justify-content-center col-4 p-5">
            <div className="imgTow col-12 position-relative">
              <img
                className="col-5 position-absolute "
                src={iboooodz}
                alt="iboooodz"
              />
            </div>
            <div className="content1 col-12 d-flex flex-column align-items-center pt-5">
              <h6>HEADPHONES</h6>
              <p>
                <span>Shop</span>
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
