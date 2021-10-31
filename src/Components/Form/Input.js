import React from 'react';

const Input = ({ id, label, value, setValue, unit }) => {
  return (
    <div>
      {/* <label htmlFor={id}>{label}</label>
      <br />
      <input type="text" value={value} onChange={setValue} /> {unit} */}

      <label htmlFor={id}>{label}</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id={id}
          aria-describedby="basic-addon3"
          value={value}
          onChange={setValue}
        />
        {unit && (
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              {unit}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
