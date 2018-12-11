import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state={
      setup:'Why so serious?',
      punch:'Click Reload :)',
      emo:'',
    }
  }
  show(){
    var url='https://safe-falls-22549.herokuapp.com/random_joke'
    axios.get(url).then((x)=>{
      this.setState({
        setup:x.data.setup,
        punch:x.data.punchline,
        emo:<span role="img" aria-label="rotf">🤣</span>
      })
    })
  }
  render() {
    return (
      <div>
      <center>
        <div class="card rounded" style={{width:'30rem'}}>
        <img class="card-img-top rounded" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/42/1508497851-heath-ledger-joker.jpg" alt="Card cap" style={{width:'25%',height:'25%'}}/>
        <div class="card-body">
          <h5 class="card-title">{this.state.setup}</h5>
          <p class="card-text">{this.state.punch} {this.state.emo}</p>
          <button onClick={()=>{this.show()}}class='btn btn-danger'>Reload<span/>🤣</button>
        </div>
        </div>
      </center>
      </div>
    );
  }
}

export default App;
