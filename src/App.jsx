import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <UserInfoForm/>
    </div>
  )
}

const UserInfoForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      alert(`Hello ${firstName} ${lastName}`)
      setFirstName('')
      setLastName('')
     }}>
      <div>
        <label>First Name: </label>
        <input type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor="">Last Name: </label>
        <input type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
      </div>
      <input type="submit" />
     </form>
  )
}

export default App
