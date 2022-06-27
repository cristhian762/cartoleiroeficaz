import React from "react";

export default function Content() {
  return (
    <React.Fragment>
      <section>
        <div className="content">
          <div>
            <div className="content__header">
              <div className="content__title">
                <div>
                  <h1>ESCALAÇÃO</h1>
                </div>
              </div>
              <div className="content__inputs">
                <div>
                  <input type="text" className="content__input content__lineup" name="lineup" value="4-3-3" />
                </div>
                <div>
                  <label className="content__label" htmlFor="input-value">
                    VALOR MÁXIMO
                  </label>
                  <input type="text" className="content__input content__value" id="input-value" name="value" placeholder="__________________" />
                </div>
                <div>
                  <button className="content__input content__button">
                    Gerar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: #282727ad;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input, button {
          color: #BFBABA;
          font-weight: 900;
        }

        .content {
          background-color: #282727;
          padding: 1rem 2rem;
          border-radius: 15px;
          height: 80vh;
          width: 60vw;
        }

        .content__header {
          border-bottom: 1px solid #bfbaba;
          display: flex;
          justify-content: space-between;
          height: 80px;
        }

        .content__title {
          display: flex;
          align-items: end;
        }

        h1 {
          font-weight: bold;
          font-size: 2.8rem;
        }

        .content__inputs {
          display: flex;
          align-items: center;
        }

        .content__input {
          background-color: transparent;
          border: 1px solid #BFBABA;
          border-radius: 10px;
          height: 50px;
        }

        .content__label {
          font-weight: bold;
          font-size: 0.7rem;
        }

        .content__lineup {
          display: flex;
          align-items: justify-content;
          margin: 0 27px;
          width: 115px;
        }

        .content__value {
          padding: 0 5px 0 5px;
          height: 39px;
          width: 120px;
          margin: 0 10px;
        }

        .content__button {
          font-size: 1.2rem;
          margin: 0 0 0 37px;
          width: 124px;
        }
      `}</style>
    </React.Fragment>
  );
}
