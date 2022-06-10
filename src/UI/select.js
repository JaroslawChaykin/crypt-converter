import React from 'react';
import styled from 'styled-components'

const SelectStyled = styled.div`
  select {
    background: #f1f1f1;
    padding: 5px 15px;
    border-radius: 15px;
    border: none;
  }
`

const Select = ({name, value, FCchanges, options}) => {
    if(!options) return
    return (
      <SelectStyled>
          <select name={name} id={name} value={value} onChange={FCchanges}>
              {
                  options.map(item => <option value={item}>{item}</option>)
              }
          </select>
      </SelectStyled>
    );
};

export default Select;