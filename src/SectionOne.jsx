import './SectionOne.css'
export default function SectionOne() {
  return (
    <>
      <section className=" sectionOne col-12 d-flex flex-column align-items-center justify-content-center">
        <div className=" content  d-flex align-items-center justify-content-center col-8 ">
          <div className="  d-flex flex-column justify-content-center">
            <h6 className=" text-dark-emphasis d-flex gap-2 p-2 ">
              <span>N</span>
              <span>E</span>
              <span>W</span>
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>D</span>
              <span>U</span>
              <span>C</span>
              <span>T</span>
            </h6>
            <h1 className=" text-white ">XX99 MARK II </h1>
            <h1 className=" text-white ">HEADPHONES</h1>
            <p className=" text-white">
              Experience natural, lifelike audio and exceptional <br /> build
              quality made for the passionate music <br /> enthusiast.
            </p>
            <button className="btn btn">SEE PRODUCT</button>
          </div>
          <div className=' imgHead col-7 '>

          </div>
          {/* <img
            className=" spcHead w-75 h-100"
            src="./public/specr.png"
            alt=""
          /> */}
        </div>
      </section>
    </>
  );
}
