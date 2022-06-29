
import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button } from 'react-bulma-components';

const CustomInput = () => {
  return (
    <Form.Field style={{ width: 625 }} kind="addons">
      <Form.Label display='flex' alignItems='center' style={{ width: "195px", fontWeight: 400, fontSize: "19px" }}>
        Телефон
      </Form.Label>
      <Form.Control>
        <Button disabled>
          +7
        </Button>
      </Form.Control>
      <Form.Control fullwidth>
        <Form.Input
          placeholder="555-555-5555"
          type="tel"
        />
      </Form.Control>
    </Form.Field>
  )
}

export default CustomInput
