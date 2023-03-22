import React, { Component } from 'react'
import axios from 'axios'

class ProcessLog extends Component {
  constructor(props){
    super(props)
    this.state = {
        productName : '',
        logFileName : '',
        severity : '',
        stacktrace : '',
        requestId: '',
        errMsg : ''
    }
  }

  submitHandler = e => {
    console.log(this.state)
    const postData = {
      productName : this.state.productName,
      logFileName : this.state.logFileName,
      severity : this.state.severity,
      stacktrace : this.state.stacktrace,
    }
    console.log(postData)
    
    let url = 'https://jsonplaceholder.typicode.com/posts/'

    e.preventDefault()
    axios.post(url, postData)
    .then(response => {
        console.log("RESPONSE : ", response)
        this.setState({requestId: response.data.id})
    })
    .catch(error => {
        console.log(error)
        this.setState({errMsg: 'Error in post - ',error})
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
              <label>Product Name : 
                <input type="text" name="productName" value={this.state.productName} onChange={this.changeHandler}/>
              </label>
            </div>
            <div>
              <label>Log File Name : 
                <input type="text" name="logFileName" value={this.state.logFileName} onChange={this.changeHandler}/>
              </label>
            </div>
            <div>
              <label>Severity : 
                <input type="text" name="severity" value={this.state.severity} onChange={this.changeHandler}/>
              </label>
            </div>
            <div>
              <label>Stacktrace : 
                <input type="text" name="stacktrace" value={this.state.stacktrace} onChange={this.changeHandler}/>
              </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        {this.state.requestId}
        {this.state.errMsg ? <div>{this.state.errMsg}</div> : null}
      </div>
    )
  }
}

export default ProcessLog