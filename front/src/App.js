import { Component } from 'react';
import './App.css';
import {
  Navbar,
  Button,
  Col,
  Input,
  Container,
  Row
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const endPoint = "http://localhost:3001";

class App extends Component {
  state = {
    results: [],
    text: ""
  }



  render() {

    const { results, text } = this.state;

    const changeText = (event) => { this.setState({ [event.target.name]: event.target.value })}
    const sendText = () =>{
      let resultados = results;

      fetch(`${endPoint}/iecho?text=${text}`)
      .then(result => result.json())
      .then(toJson => {
        if (toJson.error) {
          alert(toJson.error)
        }else{
          resultados.push(toJson);
          this.setState({results: resultados, text: ""})
        }
        
      })
      .catch(err => console.log(err))
    }


    return (
      <div className="App">
        <Navbar color="danger" light expand="md">
          <Col md={3}></Col>
          <Col md={4}>
            <Input type="text" value={text} name="text" placeholder="Insert text" onChange={(e) => changeText(e)}/>
          </Col>
          <Col md={2} style={{ textAlign: "start", marginLeft: "15px" }}>
            <Button color="primary" onClick={()=> sendText()}>Send</Button>
          </Col>
          <Col md={3}></Col>
        </Navbar>
        <Container>
          <br />
          <div className="d-flex justify-content-start align-items-start container-data flex-column">
            <Row>
              <Col md={12}>
                <h1>Results:</h1>
              </Col>
            </Row>

            <Row className="justify-content-center w-100">
              <Col md={6}>
                <Row>
                  {
                    results.map((result, index) =>
                      <Col key={index} md={12} className="text-result">
                        {result.text}
                      </Col>
                    )
                  }

                </Row>
              </Col>
            </Row>


          </div>
        </Container>
      </div>
    );
  }
}

export default App;
