import './App.css';
import { DropdownInput } from './components/DropdownInput';
import { InputContainer } from './components/InputContainer';
import { InputLabelGroup } from './components/InputLabelGroup';
import { TextInput } from './components/TextInput';
import { Fragment, useState } from 'react';
import { BillResult } from './components/BillResult';

const dropdown_options = [
  { "text": "Dissatisfied (5%)", tip: ".05"},
  { "text": "It was okay (10%)", tip: ".10"},
  { "text": "It was good (15%)", tip: ".15"},
  { "text": "Absolutely amazing! (20%)", tip: ".25"},
];

function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0.05);
  const [tip2, setTip2] = useState(0.05);

  const tipAmount = Math.round(bill * ((tip1 + tip2) / 2))
  const dropdownOptionsJSX = dropdown_options.map((el, idx) => {
    return <option key={idx} value={el.tip}>{el.text}</option>
  });

  const handleBillChange = (evt) => {
    setBill(Number(evt.target.value));
  };

  const handleTip1Change = (evt) => {
    setTip1(Number(evt.target.value));
  };

  const handleTip2Change = (evt) => {
    setTip2(Number(evt.target.value));
  };

  return (
    <>
      <InputContainer>
        <InputLabelGroup
          labelText={"How much was the bill?"}
          inputComponent={<TextInput handleChange={handleBillChange}/>}
        />
        <InputLabelGroup
          labelText={"How did you like the service?"}
          inputComponent={<DropdownInput options={dropdownOptionsJSX} handleChange={handleTip1Change}/>}
        />
        <InputLabelGroup
          labelText={"How did your friend like the service?"}
          inputComponent={<DropdownInput options={dropdownOptionsJSX} handleChange={handleTip2Change}/>}
        />
      </InputContainer>
      <BillResult bill={bill} tip={tipAmount}/>
    </>
  );
}

export default App;
