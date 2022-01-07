import React, { Component } from 'react'

export default class Validator extends Component {
    constructor () {
        super();
        this.state = { password:'' }
    }

    render() {
        return (
         <div  className='ui segment'>
             <form>
                 <div className='ui form'>
                    <div className='field'>
                     <label>Entter Password</label>
                     <input type="password" 
                       value={this.state.password}
                       onChange = {e => this.setState({password: e.target.value})}
                       >
                       </input>
                    </div>
                 </div>
             </form>
             {this.state.password.length < 6 ? 'password must be atleast 4 character' : ''}
         </div>
        );  
    }
}
