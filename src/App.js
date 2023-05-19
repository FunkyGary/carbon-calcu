import "./App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function App() {

  function selectEvent(e) {
    console.log("e.target.value", e.target.value);
  }
  return (
    <div class="card text-center rounded">
      <div class="card-header">你的一餐有多少碳排放呢？</div>
      <div class="card-body">
        {/* <h5 class="card-title">你的一餐有多少碳排放呢？</h5> */}
        <p class="card-text">
          <Form>
            <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCheckbox">
              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
              <Form.Select aria-label="Default select example" onChange={selectEvent}>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </p>
      </div>
      <div class="card-footer text-muted">2 days ago</div>
    </div>
  );
}

export default App;
