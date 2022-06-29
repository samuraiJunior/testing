import React from 'react'
import 'bulma/css/bulma.min.css';
import { Form } from 'react-bulma-components';
const CheckboxItem = ({ name }) => {
  return (
    <Form.Field display='flex'>
      <Form.Label display='flex' flexWrap='wrap' style={{ width: 195, fontWeight: 400, fontSize: "19px" }}>
        {name}
      </Form.Label>
      <Form.Control>
        <Form.Checkbox />
      </Form.Control>
    </Form.Field>
  )
}

export default CheckboxItem
