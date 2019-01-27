import React from 'react';
import MapContainer from './components/MapContainer.jsx'
import Form from './components/Form.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="map">
          <MapContainer></MapContainer>
        </div>
        <div id="form">
          <Form></Form>
        </div>
      </div>
    );
  }
}

export default App;
