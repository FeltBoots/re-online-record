import React, { Fragment } from "react";
import { connect } from 'react-redux';
import './city-info.css';

const formatPhones = (phones) => {
  const toFormat = (p) => `+${p[0]} (${p.slice(1, 4)}) ${p.slice(4, 7)}-${p.slice(7, 9)}-${p.slice(9)}`;
  return phones.map((phone, i) => {
    return (
      <Fragment key={phone}>
        <a href="#" className="link">{ toFormat(phone) }</a>
        {i < phones.length - 1 ? ', ' : ''}
      </Fragment>
    );
  });
};

const CityInfo = ({ city }) => {
  if (!city) {
    return null;
  }

  const { address, phones, price } = city;

  const formattedPrice = price ? `Стоимость услуги ${price}` : null;
  const formattedPhones = phones.length > 0 ? formatPhones(phones) : null;

  const elements = (
    <Fragment>
      <div>{address}</div>
      <div>{formattedPhones}</div>
      <div>{formattedPrice}</div>
    </Fragment>
  );

  return (
    <div className="city-info">
      { elements }
    </div>
  )
};

const mapStateToProps = ({ formValues: { city } }) => {
  return { city };
};

export default connect(mapStateToProps, null)(CityInfo);
