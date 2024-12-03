import { Component } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <UserInfoForm />
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
        alert(`Hello ${firstNameInput} ${lastNameInput}`)
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
