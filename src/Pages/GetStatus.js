import React, { Component } from 'react'
import axios from 'axios'

class GetStatus extends Component {
  constructor(props){
    super(props)
    this.state = {
        requestId : '',
        requestState : '',
        errMsg : '',
        success:false,
    }
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    let url = 'http://localhost:5000/processLog/status'
    
    axios.get(url, {
      params: {
        requestId : this.state.requestId 
      }
    })
    .then(response => {
      this.setState({success: true})
      console.log(response.data)
      this.setState({requestState: response.data.state})
      
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
        {this.state.errMsg ? <div>{this.state.errMsg}</div> : this.state.success ?<div><b> Request State :  </b>{this.state.requestState}</div>:''}
      </div>
    )
  }
}

export default GetStatus