
import { useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "react-bulma-components"
import "./App.scss"
import Checkbox from "./Components/Forms/Checkbox/Checkbox"
import CustomInput from "./Components/Forms/CustomInput"
import Input from "./Components/Forms/Input"
import Radio from "./Components/Forms/Radio/Radio"
import ModalPop from "./Components/ModalPop"
import Header from "./Components/Header"



const App = () => {
  const [modal, setModal] = useState(false)
  const checked = useSelector(state => state.main.checkedRadio)
  return (
    <div className={"App"}>
      <Header />
      <div>
        <h3 className="registration">Регистрация</h3>
      </div>
      <main className={"main"}>
        <div className='firstForm'>
          <h3 className="sectionTitle normalaise">Вы регистрируетесь как</h3>
          <Radio />
        </div>
        <Input name="Эл. почта" />
        <div>
          <h3 className="sectionTitle">Название организации</h3>
          <Input name="ИП или Юр.лицо" />
          <Input name="ИНН" />
        </div>

        <div>
          <h3 className="sectionTitle">Фактический адрес</h3>
          <Input name="Ваш город" />
          <div className="InputGroup">
            <Input InputWidth={"180px"} name="Улица" />
            <Input position={"center"} LabelWidth={"130px"} InputWidth={"180px"} name="Дом/стр." />
            <Input position={"center"} LabelWidth={"100px"} InputWidth={"90px"} name="Офис" />
          </div>
          <CustomInput />
          <div>
            {checked === "Покупатель" ? null : <Input name="Сайт вашей компании" />}
          </div>
        </div>
        <div>
          <h3 className="sectionTitle">Фактический адрес</h3>
          <Checkbox />
        </div>
      </main>
      <Button className="SendBtn" color={"info"} onClick={() => setModal(true)}>Отправить заявку</Button>
      {modal && <ModalPop setModal={setModal} />}
    </div>
  );
}

export default App;
