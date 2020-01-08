import React, { Component } from 'react';
import ChirpCard from './ChirpCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirp: "",
      chirps: []
    }
  }

  componentDidMount() {
    let oldChirps = [
      {
        text: "Hey, world!"
      },
      {
        text: "Wow, look, a new app!"
      },
      {
        text: "Yea, it is pretty cool! I love it!"
      }
    ];

    this.setState({ chirps: oldChirps });
  }

  handleChirpMessageChange(e) {
    this.setState({ chirp: e.target.value });
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.setState({ chirp: '' });  // Clear out the input text field on the form.
    let existingChirps = this.state.chirps;
    let chirp = {  // Make this an object of the new chirp.
      text: this.state.chirp
    };

    existingChirps.unshift(chirp);  // "Push" the new chirp at the beginning of the array, existingChirps.
  }

  render() {
    return (
      <>
        <main className="container">
          <form>
            <div className="form-group"></div>
            <label className="col-md-12">What would you like to chirp?</label>
            <input className="col-md-6" type="text" id="text" value={this.state.chirp} onChange={(event) => this.handleChirpMessageChange(event)} />
            <button id="submit" className="btn btn-primary" onClick={(event) => this.handleButtonClick(event)}>Chirp It!</button>
          </form>

          <section className="col-md-6">
            {this.state.chirps.map((chirp) => {
              return (
                <>
                  {<ChirpCard chirps={chirp} />}
                </>
              )
            })}

          </section>
        </main>

      </>
    )
  }

}

export default App;
