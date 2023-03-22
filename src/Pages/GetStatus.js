import React, { Component } from 'react'
import axios from 'axios'

class GetStatus extends Component {
  constructor(props){
    super(props)
    this.state = {
        requestId : '',
        requestState : 'init',
        errMsg : ''
    }
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    let url = 'https://jsonplaceholder.typicode.com/posts/'
    
    axios.get(url, {
      params: {
        requestId : this.state.requestId 
      }
    })
    .then(response => {
        console.log(response)
        this.setState({requestState: response.data})
    })
    .catch(error => {
        console.log(error)
        this.setState({errMsg: 'Error retreiving data'})
    })
  }

  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label> Request Id : 
                <input type="text" name="requestId" value={this.state.requestId} onChange={this.changeHandler}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        {this.state.requestState.id}
        {this.state.errMsg ? <div>{this.state.errMsg}</div> : null}
      </div>
    )
  }
}

export default GetStatus