
// import classes from './TextInput.module.css'

export const TextInput2 = ({ handleInputChange, isDisabled }) => {
  return (
    <input type="text" onChange={handleInputChange} disabled={isDisabled}></input>
  )
}
