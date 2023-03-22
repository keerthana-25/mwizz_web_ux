import React, { Component } from 'react';
import axios from 'axios'

class AllRequestDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            productName : '',
            allData : [],
            errMsg : ''
        }
      }
    
      submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        let url = 'https://jsonplaceholder.typicode.com/posts/'
        
        axios.get(url, {
            params: {
              productName : this.state.productName
            }
          })
        .then(response => {
            console.log(response)
            this.setState({allData: response.data})
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
        const data = this.state.allData
        return (
          <div>
            <form onSubmit={this.submitHandler}>
                <div>
                  <label> Product Name : 
                    <input type="text" name="productName" value={this.state.productName} onChange={this.changeHandler}/>
                  </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
            {
                data.length ?  data.map(d => <div key={d.id}>{d.title}</div>) : null
            }
            {this.state.errMsg ? <div>{this.state.errMsg}</div> : null}
          </div>
        )
      }
    }
export default AllRequestDetails