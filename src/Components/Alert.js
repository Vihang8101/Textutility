import React from 'react';

export default function Alert(props) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {capitalizeFirstLetter(props.alert.type)}<strong> {capitalizeFirstLetter(props.alert.msg)}</strong> 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}
