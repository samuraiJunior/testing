import React from 'react'
import 'bulma/css/bulma.min.css';
import { Form } from 'react-bulma-components';
import { useSelector, useDispatch } from "react-redux"
import { SetcheckedRadio } from '../../../BLL/MainSlice';
const Radio = ({ register }) => {
  const checked = useSelector(state => state.main.checkedRadio)
  const dispatch = useDispatch()

  const handleChange = (val) => {
    dispatch(SetcheckedRadio(val))
  }
  return (
    <Form.Control display='flex' flexDirection='column' style={{ fontWeight: 700, fontSize: "18px" }}>
      <Form.Radio
        onChange={() => handleChange("Покупатель")}
        checked={checked === "Покупатель"}
        value="Покупатель"
        name="story-radio-name"
      >
        Покупатель
      </Form.Radio>
      <Form.Radio
        onChange={() => handleChange("Поставщик")}
        checked={checked === "Поставщик"}
        value="Поставщик"
        name="story-radio-name"
        style={{ marginLeft: "0", marginTop: "10px" }}
      >
        Поставщик
      </Form.Radio>
    </Form.Control>
  )
}

export default Radio
