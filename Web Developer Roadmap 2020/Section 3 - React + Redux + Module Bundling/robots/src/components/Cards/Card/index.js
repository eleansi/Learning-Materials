import React from "react";
import './card.scss';

const Card = ({id, name, userName, email}) => (
  <div key={id} className="card dib br3 pa3 grow bw2 shadow-5-ns">
    {/* <img alt="" src={`https://robohash.org/test${id}?200x200`} /> */}
    {/* <img alt="" src={`https://via.placeholder.com/150x150`} /> */}
    <h1 className="tc">{name}</h1>
    <p className="tc">{email}</p>
  </div>
);

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
