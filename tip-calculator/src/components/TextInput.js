

export const TextInput = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} onChange={handleChange}></input>
    </div>
  )
}
