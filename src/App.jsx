import { useState } from 'react'
import './App.css'

export function UserInfo({userInformation}){
  const firstName = userInformation?.firstName
  const lastName = userInformation?.lastName
  return <div>
    <div>First Name: {firstName}</div>
    <div>Last Name: {lastName}</div>
  </div>
}

function App() {
  const [userInformation, setUserInformation] = useState(null)
  return (
    <div className="App">
      <UserInfo userInformation={userInformation} />
      <UserInfoForm handleUserInformation={(userInformation) => {
        setUserInformation(userInformation)
      }}/>
    </div>
  )
}


const UserInfoForm = ({handleUserInformation}) => {
  const [firstNameInput, setFirstNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleUserInformation({
        firstName: firstNameInput,
        lastName: lastNameInput
      })
      setFirstNameInput('')
      setLastNameInput('')
    }}>
      <TextInput
        label={"First Name"}
        onChange={(e) => {
          setFirstNameInput(e.target.value)
        }}
        value={firstNameInput}/>
      <TextInput
        label={"Last Name"}
        onChange={(e) => {
          setLastNameInput(e.target.value)
        }}
        value={lastNameInput}/>
      <input type="submit" />
    </form>
  )
}


const TextInput = ({ value, label, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <input
        type="text"
        value={value}
        onChange={onChange} />
    </div>
  )
}

export default App
