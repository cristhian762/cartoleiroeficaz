/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Content() {
  const [btnSubmit, setBtnSubmit] = useState("Gerar");

  const [state, setState] = useState({});

  const position = {
    1: "GOL",
    2: "LAT",
    3: "ZAG",
    4: "MEI",
    5: "ATA",
    6: "TEC",
  };

  const escalation = {
    escalacao: [
      93882,
      39.51,
      [
        {
          idJogador: 93882,
          nome: "Cleiton",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/05/05/ec4a7cb649121dc08c2869bdcf6ef984_140x140.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2020/01/01/65.png",
          idPosicao: 1,
          preco: 8.73,
          media: 3.46,
          minValorizar: -0.59,
          coef: -51.19627118644068,
        },
        {
          idJogador: 87402,
          nome: "Messias",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/02/22/871ec7ac3407b7d4cb4080a3fce62515_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2019/10/10/ceara-65x65.png",
          idPosicao: 3,
          preco: 4.02,
          media: 2.66,
          minValorizar: -0.26,
          coef: -41.12769230769231,
        },
        {
          idJogador: 89285,
          nome: "Matheus Sales",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/04/13/4c8702a05eb20f2e973e719c61d29092_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2021/03/01/goias-65.png",
          idPosicao: 4,
          preco: 2.87,
          media: 1.1,
          minValorizar: -0.37,
          coef: -8.532432432432435,
        },
        {
          idJogador: 88087,
          nome: "Ramon Menezes",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/03/03/addba459fcb5f0a6de801f763b1f8375_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2020/07/02/atletico-go-2020-65.png",
          idPosicao: 3,
          preco: 3.82,
          media: 1.81,
          minValorizar: -0.87,
          coef: -7.94735632183908,
        },
        {
          idJogador: 72142,
          nome: "Danilo Avelar",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/04/12/2a7b85e6015605e0770fe393faf72a9a_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2019/02/28/escudo65_1.png",
          idPosicao: 3,
          preco: 2.92,
          media: 1.84,
          minValorizar: -1.02,
          coef: -5.267450980392157,
        },
        {
          idJogador: 102598,
          nome: "Helinho",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/05/05/d0de5e463c8123423e2713cdde571faf_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2020/01/01/65.png",
          idPosicao: 5,
          preco: 3.72,
          media: 1.16,
          minValorizar: -1.16,
          coef: -3.72,
        },
        {
          idJogador: 117909,
          nome: "Wesley",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/04/19/e9c12ff02569765cb5c876412fae8bb8_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2019/09/30/Corinthians_65.png",
          idPosicao: 5,
          preco: 0.73,
          media: -0.3,
          minValorizar: 0.09,
          coef: -2.4333333333333336,
        },
        {
          idJogador: 102067,
          nome: "Xavier",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/04/27/695e017b3a4e70b82e28dd504e54cd9b_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2019/09/30/Corinthians_65.png",
          idPosicao: 4,
          preco: 2.09,
          media: -0.1,
          minValorizar: 0.94,
          coef: -0.2223404255319149,
        },
        {
          idJogador: 105845,
          nome: "Matheus Araújo",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/04/27/1609ad4f570f05f5c824b78abbb3b610_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2019/09/30/Corinthians_65.png",
          idPosicao: 4,
          preco: 1,
          media: 0,
          minValorizar: 1.25,
          coef: 0,
        },
        {
          idJogador: 111891,
          nome: "Guilherme Biro",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2021/05/24/866cbcde80dc4cd9acca0a859f191aef_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2019/09/30/Corinthians_65.png",
          idPosicao: 4,
          preco: 2,
          media: 0,
          minValorizar: 0.2,
          coef: 0,
        },
        {
          idJogador: 107745,
          nome: "Caio Vidal",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2022/04/02/2de9576136ea8acae47822e900c3cc5a_FORMATO.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2016/05/03/inter65.png",
          idPosicao: 5,
          preco: 1.98,
          media: 0.6,
          minValorizar: 1.92,
          coef: 0.6187499999999999,
        },
        {
          idJogador: 101077,
          nome: "Umberto Louzer",
          status: 7,
          foto: "https://s.glbimg.com/es/sde/f/2021/04/15/6b25bcef84ca2ca67c4b19b4e5356ca3_140x140.png",
          iconTime: "https://s.glbimg.com/es/sde/f/organizacoes/2021/04/29/juventude65.png",
          idPosicao: 6,
          preco: 5.63,
          media: 3.23,
          minValorizar: 4.39,
          coef: 4.142346241457859,
        },
      ],
    ],
  };

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

    console.log(escalation.escalacao[2]);

    // const options = {
    //   method: "GET",
    //   url: "http://localhost:3333/escalacao",
    //   headers: { "Content-Type": "application/json" },
    //   data: { formacao: 2, preco: 1000 },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    setBtnSubmit("Gerar");

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

                  {escalation.escalacao[2].map((elem) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={["content__player "] + position[elem.idPosicao].toLowerCase()}>
                      <div className="player">
                        <div className="player__coust">C$ {elem.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</div>
                        <div className="player__image">{elem.nome.toUpperCase().substring(0, 4)}</div>
                        <div className="player__team">
                          <img src={elem.iconTime} alt="Escudo" height={50} width={50} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col">
                {escalation.escalacao[2].map((elem) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="content__line">
                    <div className="content__col_1">{position[elem.idPosicao]}</div>
                    <div className="content__col_2">
                      {elem.nome.toUpperCase()} {elem.idJogador == escalation.escalacao[0] ? <small className="content__caption">C</small> : ""}
                    </div>
                    <div className="content__col_3">C$ {elem.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</div>
                  </div>
                ))}

                <div className="content__total">
                  <small>TOTAL</small>
                  <b>C$ {escalation.escalacao[1].toLocaleString("pt-br", { minimumFractionDigits: 2 })}</b>
                </div>

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

          @media screen and (max-height: 936px) {
            .content {
              transform: scale(0.7);
            }
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
            padding: 10px 0;
          }

          .content__line:first-child {
            padding-top: 0px;
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
            display: flex;
            width: 60%;
          }

          .content__col_3 {
            display: flex;
            justify-content: flex-end;
            width: 20%;
          }

          .content__total {
            display: flex;
            justify-content: flex-end;
          }

          .content__total > small,
          .content__total > b {
            border-top: 1px solid white;
          }

          .content__total > small {
            color: #ffffff;
            font-size: 0.8rem;
            padding-right: 0.5rem;
            padding-top: 0.7rem;
          }

          .content__total > b {
            font-size: 1.5rem;
          }

          .content__caption {
            align-items: center;
            background-color: #d68d14;
            border-radius: 50%;
            display: flex;
            font-size: 1.8rem;
            justify-content: center;
            height: 35px;
            width: 35px;
            margin-left: 0.8rem;
          }

          .content__player {
            display: none;
          }

          .player {
            background-color: #282727;
            border: 2px solid #cfbaba;
            border-radius: 10px;
            height: 105px;
            width: 76px;
          }

          .player__coust {
            text-align: center;
            border-bottom: 2px solid #cfbaba;
          }

          .player__image {
            align-items: center;
            display: flex;
            justify-content: center;
            height: 50px;
          }

          .player__team {
            transform: translate(-23px, -15px);
          }

          .loading {
            border: 5px solid black;
            border-radius: 50%;
            border-top: 5px solid #373737;
            height: 50px;
            width: 50px;

            animation: ani_loading 1s infinite ease;
          }

          .gol {
            display: flex;
            position: absolute;
            transform: translate(230px, -125px);
          }

          .tec {
            display: flex;
            position: absolute;
            transform: translateY(-125px);
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
