import React from "react";
import estilos from "./Card.module.css";
import { Form } from "../Form";

export const Card = ({ image }) => {
  return (
    <div className={estilos.card__container}>
      <div className={estilos.card__image}>
        <img className={estilos.card} src={image} alt="Pikachu" />
      </div>
      <Form />
    </div>
  );
};
