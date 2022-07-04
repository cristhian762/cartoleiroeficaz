import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Content() {
  const [btnSubmit, setBtnSubmit] = useState("Gerar");

  const [state, setState] = useState({});
    
  function handleChange(event) {
    if(event.target.name == 'lineup') {
      state['formacao'] = event.target.value;
    }

    if(event.target.name == 'price') {
      state['preco'] = event.target.value;
    }

    setState(state);
  }

  function handleSubmit(event) {
    setBtnSubmit("Gerando ...");

    console.log(state);

    axios.get("http://172.19.47.21:3333/escalacao", state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finally");
        setBtnSubmit("Gerar");
      });

    event.preventDefault();
  }

  return (
    <React.Fragment>
      <section>
        <div className="content">
          <div className="content__header" style={{ marginBottom: "40px" }}>
            <div className="content__title">
              <div>
                <h1>ESCALAÇÃO</h1>
              </div>
            </div>
            <form className="content__inputs" onSubmit={handleSubmit}>
              <div>
                <input type="text" className="content__input content__lineup" name="lineup" onChange={handleChange} />
              </div>
              <div>
                <label className="content__label" htmlFor="input-value">
                  VALOR MÁXIMO
                </label>
                <input type="text" className="content__input content__price" id="input-price" name="price" placeholder="__________________" onChange={handleChange} />
              </div>
              <div>
                <button type="submit" className="content__input content__button">
                  {btnSubmit}
                </button>
              </div>
            </form>
          </div>

          <div className="content__field">
            <div className="row">
              <div className="col">
                <div className="content__image">
                  <Image src="/image/campo.png" alt="Campo" width={593} height={733} />
                </div>
              </div>
              <div className="col">
                <div className="content__line">
                  <div className="content__col_1">GOL</div>
                  <div className="content__col_2">MARCELO BOECK</div>
                  <div className="content__col_3">C$ 4.00</div>
                </div>

                <div className="loading"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          section {
            align-items: center;
            background-color: #282727ad;
            display: flex;
            justify-content: center;
            height: 87vh;
          }

          input,
          button {
            color: #bfbaba;
            font-weight: 900;
          }

          .content {
            background-color: #282727;
            border: 1px solid black;
            border-radius: 15px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            min-height: 898px;
            min-width: 1156px;
            padding: 1rem 2rem;
            transform: scale(0.8);
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
            border: 1px solid #bfbaba;
            border-radius: 10px;
            height: 50px;
          }

          .content__label {
            font-weight: bold;
            font-size: 0.7rem;
          }

          .content__lineup {
            align-items: justify-content;
            display: flex;
            font-size: 2rem;
            margin: 0 27px;
            padding-left: 13px;
            width: 115px;
          }

          .content__price {
            padding: 0 5px 0 5px;
            height: 39px;
            margin: 0 10px;
            font-size: 1.5rem;
            width: 120px;
          }

          .content__button {
            font-size: 1.2rem;
            margin: 0 0 0 37px;
            width: 124px;
          }

          .content__button:hover {
            background-color: #373737;
          }

          .content__line {
            display: flex;
          }

          .content__line > div {
            font-weight: bold;
            font-size: 1.5rem;
          }

          .content__col_1 {
            font-weight: 300 !important;
            width: 20%;
          }

          .content__col_2 {
            width: 60%;
          }

          .content__col_3 {
            width: 20%;
          }

          .loading {
            border: 5px solid black;
            border-radius: 50%;
            border-top: 5px solid #373737;
            height: 50px;
            width: 50px;

            animation: ani_loading 1s infinite ease;
          }

          @keyframes ani_loading {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </React.Fragment>
  );
}
