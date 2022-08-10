/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";

const position = {
  1: "GOL",
  2: "LAT",
  3: "ZAG",
  4: "MEI",
  5: "ATA",
  6: "TEC",
};

function PlayerImg({ data }) {
  return (
    <React.Fragment>
      {data.escalacao[2].map((elem) => (
        // eslint-disable-next-line react/jsx-key
        <div className={["content__player "] + position[elem.idPosicao].toLowerCase()}>
          <div className="player">
            <div className="player__coust">C$ {elem.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</div>
            <div className="player__image">
              <img src={elem.foto.replace("FORMATO", "140x140")} alt="Jogador" height={75} width={70} />
            </div>
            <div className="player__team">
              <img src={elem.iconTime} alt="Escudo" height={50} width={50} />
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

function Escalation({ data }) {
  return (
    <React.Fragment>
      {data.escalacao[2].map((elem) => (
        // eslint-disable-next-line react/jsx-key
        <div className="content__line">
          <div className="content__col_1">{position[elem.idPosicao]}</div>
          <div className="content__col_2">
            {elem.nome.toUpperCase()} {elem.idJogador == data.escalacao[0] ? <small className="content__caption">C</small> : ""}
          </div>
          <div className="content__col_3">C$ {elem.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</div>
        </div>
      ))}

      <div className="content__total">
        <small>TOTAL</small>
        <b>C$ {data.escalacao[1].toLocaleString("pt-br", { minimumFractionDigits: 2 })}</b>
      </div>
    </React.Fragment>
  );
}

export default function Content() {
  const [btnSubmit, setBtnSubmit] = useState("Gerar");

  const [state, setState] = useState({});

  const [escalation, setEscalation] = useState(<></>);

  const [playerImg, setPlayerImg] = useState(<></>);

  function handleChange(event) {
    if (event.target.name == "lineup") {
      state["formacao"] = event.target.value;
    }

    if (event.target.name == "price") {
      state["preco"] = event.target.value;
    }

    setState(state);
  }

  function handleSubmit(event) {
    setBtnSubmit("Gerando ...");

    setEscalation(<div className="loading"></div>);

    const options = {
      method: "POST",
      url: "http://localhost:3333/escalacao",
      headers: { "Content-Type": "application/json" },
      data: state,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setEscalation(<Escalation data={response.data} />);
        setPlayerImg(<PlayerImg data={response.data} />);
        setBtnSubmit("Gerar");
      })
      .catch(function (error) {
        console.error(error);
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

                  {playerImg}
                </div>
              </div>
              <div className="col content__escalation">
                {escalation}
                {/* <div className="loading"></div> */}
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
           {
            /* 
          .content__escalation {
            display: flex;
            justify-content: center;
            align-items: center;
          } */
          }
        `}
      </style>
    </React.Fragment>
  );
}
