import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form } from 'react-bulma-components';
const Input = ({ name, InputWidth, position, LabelWidth }) => {
  return (

    <Form.Field display='flex' alignItems='center' >
      <Form.Label display='flex' justifyContent={position && position}
        style={{ width: LabelWidth ? LabelWidth : "195px", fontWeight: 400, fontSize: "19px" }}>
        {name}
      </Form.Label>
      <Form.Control>
        <Form.Input
          style={{ width: InputWidth ? InputWidth : "430px" }}
          type="text"

        />
      </Form.Control>
    </Form.Field>

  )
}

export default Input
