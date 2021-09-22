import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const SelectCountry = () => {

  const [country, setCountry] = useState('');

  return (
    <CountrySelect
      value={country}
      onChange={setCountry}
      valueAs='id'
      flags={true}
    />
  );

};
export default SelectCountry;
