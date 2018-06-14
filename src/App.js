import React, { Component } from 'react'
import './App.css'
import FirstName from './components/FirstName'
import LastName from './components/LastName'
import Age from './components/Age'

const MyInput = (props) => {
  return <input type='text' ref={props.inputRef} />
}

const FuncCustomComp = (props) => {
  let textRef = null

  const handleClick = () => {
    alert(
      `WITHOUT USING STATE YOU MANAGE TO CONTROL THIS INPUTS VALUE: ${textRef.value} `
    )
  }
  return (
    <div style={styles.myInput}>
      <MyInput
        inputRef={(input) => {
          textRef = input
        }}
      />
      <input type='button' value='show input' onClick={handleClick} />
    </div>
  )
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: ''
    }
  }
  onKeyUp = (passed, e) => {
    if (e.keyCode === 13) {
      console.log(passed)
      switch (passed) {
        case 'firstName':
          this.lastName.focus()
          break
        case 'lastName':
          this.age.focus()
          break
        case 'age':
          this.submit.focus()
          break
        default:
          this.submit.focus()
      }
    }
  }
  onSubmit = () => {
    alert(
      `${this.state.firstName} ${this.state
        .lastName} submitted this info up to the cloud !!`
    )
  }

  handleChange = (event) => {
    console.log('in here')
    // const e = this.state.fistName
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    return (
      <div className='App'>
        <div>
          <FuncCustomComp />
        </div>

        <div>
          <span>First Name: </span>
          <FirstName
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <span>Last Name: </span>
          <LastName value={this.state.lastName} onChange={this.handleChange} />
        </div>
        <div>
          <span>Age: </span>
          <Age value={this.state.age} onChange={this.handleChange} />
        </div>
        <div>
          <input
            type='submit'
            value='Submit'
            onClick={this.onSubmit}
            ref={(input) => {
              this.submit = input
            }}
          />
        </div>
      </div>
    )
  }
}
const styles = {
  myInput: {
    margin: '20px'
  }
}

export default App
