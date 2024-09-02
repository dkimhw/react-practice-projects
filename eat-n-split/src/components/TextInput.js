
// import classes from './TextInput.module.css'

export const TextInput = ({ name, id, handleInputChange, isDisabled }) => {
  return (
    <input type="text" name={name} id={id} onChange={handleInputChange} disabled={isDisabled}></input>
  )
}
