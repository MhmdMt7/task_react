import "./SectionTow.css";
export default function SectionTow() {
  return (
    <>
      <section className="sectionTow d-flex p-5  ">
        <div className=" container p-5 col-12 gap-2 d-flex align-items-end justify-content-center ">
          <div className="upperSection d-flex flex-column align-items-center - justify-content-center col-4 p-5 ">
            <div className="imgTow col-12 position-relative">
              <img
                className=" col-4 position-absolute"
                src="./public/speacarHead.png"
                alt=""
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
                src="./public/specar2.png"
                alt=""
              />
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
                src="./public/iboooodz.png"
                alt=""
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
