import React from "react";

export default function Content() {
  return (
    <React.Fragment>
      <section>
        <div className="box">
          <div>
            <div className="box__header">
              <div>
                <h1>ESCALAÇÃO</h1>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: #282727ad;
          height: 85vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .box {
          background-color: #282727;
          padding: 1rem 2rem;
          border-radius: 15px;
          height: 80vh;
          width: 60vw;
        }

        .box__header {
          border-bottom: 1px solid #bfbaba;
        }

        h1 {
          font-size: 2rem;
        }
      `}</style>
    </React.Fragment>
  );
}
