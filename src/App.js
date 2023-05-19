import "./App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function App() {

  function selectEvent(e) {
    console.log("e.target.value", e.target.value);
  }
  return (
    <div className="w-100">
      <div className="card text-center rounded mx-auto" style={{ width: '400px' }}>
        <div className="card-header">你的一餐有多少碳排放呢？</div>
        <div className="card-body">
          {/* <h5 className="card-title">你的一餐有多少碳排放呢？</h5> */}
          <p className="card-text">
            <Form className="container">
              <Form.Group className="mb-3 d-flex align-items-center row" controlId="formSelect">
                <label className="my-1 mx-4 col" for="inlineFormCustomSelectPref">白米飯</label>
                <Form.Select className="col" aria-label="Default select example" onChange={selectEvent}>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center row" controlId="formSelect">
                <label className="my-1 mx-4 col" for="inlineFormCustomSelectPref">白米飯</label>
                <Form.Select className="col" aria-label="Default select example" onChange={selectEvent}>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                點我計算
              </Button>
            </Form>
          </p>
        </div>
        {/* <div className="card-footer text-muted">2 days ago</div> */}
      </div >
    </div >

  );
}

export default App;
