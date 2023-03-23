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
        let url = 'http://localhost:5000/allRequestDetails'
        
        axios.get(url, {
            params: {
              productName : this.state.productName
            }
          })
        .then(response => {
            console.log(response)
            this.setState({allData: response.data.data})
            console.log(this.state.allData)
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
        const headers = ['_id', 'productName', 'logFileName', 'state']
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
              data.length ?  
                <div>
                  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                      <tr>
                        {headers.map((header) => (
                          <th key={header} style={{ border: '1px solid black', padding: '8px', textAlign: 'left'}}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, index) => (
                        <tr key={index}>
                          {headers.map((header) => (
                            <td key={header} style={{ border: '1px solid black', padding: '8px' }}>{row[header]}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
               : null
            }
            {this.state.errMsg ? <div>{this.state.errMsg}</div> : null}
          </div>
        )
      }
    }
export default AllRequestDetails