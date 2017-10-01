/**
*
* Select
*
*/

import React from 'react';

const Select = ({ input, meta, placeholder, children, multiple }) => {
  const { touched, error, warning, valid, active } = meta
  const hasError = (touched && error)
  const hasWarning = (touched && warning)
  const touchedValid = (touched && valid)
  return (
    <div style={{position: 'relative'}}>
      <select
        multiple={multiple}
        style={{width: '100%'}}
        {...input}
        >
        {children}
      </select>
      {hasError && <span className="form-text text-muted"><small>{error}</small></span>}
      {hasWarning && <span className="form-text text-muted"><small>{warning}</small></span>}
    </div>
  )
}

export default Select;
