import React from 'react'
import 'bulma/css/bulma.min.css';
import CheckboxItem from './CheckboxItem';
const Checkbox = () => {
    return (<>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}></div>
        <CheckboxItem name={"Магазин"} />
        <CheckboxItem name={"Сеть Магазинов"} />
        <CheckboxItem name={"Федеральная сеть магазинов"} />
        <CheckboxItem name={"Интернет магазин"} />
        <CheckboxItem name={"Автосервис"} />
    </>
    )
}

export default Checkbox
