import React from "react";
import "../assets/styles/components/Form.scss";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handlerForm = (e) => {
    e.preventDefault();

    console.log(name, email, text);

    setName("");
    setEmail("");
    setText("");

    alert("dados enviados")
  };

  return (
    <form className="form" onSubmit={handlerForm}>
      <label>
        <span> Seu Nome: </span>
        <input
          required
          type="text"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        <span>Seu Melhor Email: </span>
        <input
          required
          type="email"
          name=""
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        <span>Seu Comentario: </span>
        <textarea
          required
          name=""
          id=""
          rows="5"
          placeholder="Digite seu Comentario"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </label>
      <button className="btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
