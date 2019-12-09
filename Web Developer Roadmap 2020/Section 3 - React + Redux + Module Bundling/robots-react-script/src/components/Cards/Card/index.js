import React from "react";
import './card.scss';

const Card = ({created, name, height}) => (
  <div key={created} className="card br3 pa3 grow bw2 shadow-5-ns">
    {/* <img alt="" src={`https://robohash.org/test${id}?200x200`} /> */}
    <img alt="" src={`https://via.placeholder.com/150x150`} />
    <div className="card-content-wrapper">
      <h1 className="tr-ns">{name}</h1>
      <div className="social-media-links-wrapper">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <p className="tr-ns">{height}</p>
    </div>
  </div>
);

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
