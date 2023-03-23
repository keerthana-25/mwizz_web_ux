import React, { Component } from 'react'
import axios from 'axios'

class ProcessLog extends Component {
  constructor(props){
    super(props)
    this.state = {
        productName : '',
        logFileName : '',
        severity : '',
        stacktraceFile : null,
        requestId: '',
        errMsg : ''
    }
  }

  submitHandler = e => {
    console.log(this.state)

    const formData = new FormData();
    formData.append('stacktraceFile', this.state.stacktraceFile)
    formData.append('productName', this.state.productName)
    formData.append('logFileName', this.state.logFileName)
    formData.append('severity', this.state.severity)
      
    console.log(formData)
    
    let url = 'http://localhost:5000/processLog'

    e.preventDefault()
    axios.post(url, formData, {
      headers: {
          'Content-Type': 'application/json',
      }
    })
    .then(response => {
        console.log("RESPONSE : ", response)
        this.setState({requestId: response.data.requestId})
    })
    .catch(error => {
        console.log(error)
        this.setState({errMsg: 'Error in post - ',error})
    })
  }

  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  fileChangeHandler = e => {
    this.setState({ stacktraceFile: e.target.files[0] });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
              <label>Product Name -
                <input type="text" name="productName" value={this.state.productName} onChange={this.changeHandler}/>
              </label>
            </div>
            <div>
              <label>Log File Name -
                <input type="text" name="logFileName" value={this.state.logFileName} onChange={this.changeHandler}/>
              </label>
            </div>
            <div>
              <label>Severity -
                <input type="text" name="severity" value={this.state.severity} onChange={this.changeHandler}/>
              </label>
            </div>
            <div>
              <label>Upload stacktraceFile File -
                <input type="file" onChange={this.fileChangeHandler}/>
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