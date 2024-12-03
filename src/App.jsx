import { Component, useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("")
  return (
    <div className="App">
      {firstName || "name not set yet"}
      <UserInfoForm setFirstName={setFirstName}/>
    </div>
  )
}


class UserInfoForm extends Component {
  state = {
    firstNameInput: "",
    lastNameInput: ""
  }
  render(){
    const {firstNameInput, lastNameInput} = this.state
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.setFirstName(this.state.firstNameInput)
        this.setState({
          firstName: "",
          lastName: ""
        })
      }}>
        <div>
          <label>First Name: </label>
          <input type="text"
            value={firstNameInput}
            onChange={(e) => {
              this.setState({firstNameInput: e.target.value})
            }}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text"
            value={lastNameInput}
            onChange={(e) => {
              this.setState({lastNameInput: e.target.value})
            }}
          />
        </div>
        <input type="submit" />
      </form>
    )
  }

}

export default App
