import "./App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//<iframe src="https://funkygary.github.io/carbon-calcu/" style="width: 100%; height: 100%"></iframe>

function App() {

  function selectEvent(e) {
    console.log("e.target.value", e.target.value);
  }
  return (
    <div className="card text-center rounded mx-auto" style={{ width: '400px' }}>
      <div className="card-header" style={{ 'background-color': '#00a9e0', color: 'white' }}>你的一餐有多少碳排放呢？</div>
      <div className="card-body">
        {/* <h5 className="card-title">你的一餐有多少碳排放呢？</h5> */}
        <p className="card-text">
          <Form className="container">
            <Form.Group className="mb-3 d-flex align-items-center row" controlId="formSelect">
              <label className="my-1 mx-4 col" for="inlineFormCustomSelectPref">米飯</label>
              <Form.Select className="col" aria-label="Default select example" onChange={selectEvent}>
                <option value="0.1759">1碗 160公克</option>
                <option value="0.3518">2碗 320公克</option>
                <option value="0.5277">3碗 480公克</option>
                <option value="0.7036">4碗 640公克</option>
                <option value="0.8795">5碗 800公克</option>
                <option value="1.0554">6碗 960公克</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center row" controlId="formSelect">
              <label className="my-1 mx-4 col" for="inlineFormCustomSelectPref">麵食</label>
              <Form.Select className="col" aria-label="Default select example" onChange={selectEvent}>
                <option value="0.124">1碗 100公克</option>
                <option value="0.248">2碗 200公克</option>
                <option value="0.372">3碗 300公克</option>
                <option value="0.496">4碗 400公克</option>
                <option value="0.62">5碗 500公克</option>
                <option value="0.744">6碗 600公克</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center row" controlId="formSelect">
              <label className="my-1 mx-4 col" for="inlineFormCustomSelectPref">豆魚蛋肉類</label>
              <Form.Select className="col" aria-label="Default select example" onChange={selectEvent}>
                <option value="15.5">牛肉 100公克</option>
                <option value="2.4">豬肉 100公克</option>
                <option value="1.82">雞肉 100公克</option>
                <option value="1.34">魚肉 100公克</option>
                <option value="0.93">蝦子 100公克</option>
                <option value="0.08">豆腐 100公克</option>
                <option value="0.05">堅果 100公克</option>
                <option value="0.16">雞蛋 1顆</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center row" controlId="formSelect">
              <label className="my-1 mx-4 col" for="inlineFormCustomSelectPref">蔬菜水果類</label>
              <Form.Select className="col" aria-label="Default select example" onChange={selectEvent}>
                <option value="0.06">蘋果1顆</option>
                <option value="0.11">香蕉1根</option>
                <option value="0.05">橘子1顆</option>
                <option value="0.22">莓果 144公克</option>
                <option value="0.05">甘藍菜 100公克</option>
                <option value="0.04">根莖類 100公克</option>
                <option value="0.32">番茄 150公克</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center row" controlId="formSelect">
              <label className="my-1 mx-4 col" for="inlineFormCustomSelectPref">點心飲料</label>
              <Form.Select className="col" aria-label="Default select example" onChange={selectEvent}>
                <option value="0.6">牛奶1杯 250公克</option>
                <option value="0.3">米漿1杯 250公克</option>
                <option value="0.25">豆漿1杯 250公克</option>
                <option value="0.4">咖啡1杯 15公克咖啡豆</option>
                <option value="0.19">鳳梨酥1顆 35公克</option>
                <option value="0.95">黑巧克力1片 50公克</option>
                <option value="0.17">可樂1罐 330毫升</option>
                <option value="0.22">啤酒1罐 330毫升</option>
                <option value="0.13">紅酒1杯 150毫升</option>
                <option value="0.12">紅茶1份 鋁箔包300毫升</option>
                <option value="0.14">奶茶1份 鋁箔包300毫升</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 border-0" style={{ 'background-color': '#ed8c01', color: 'white' }}>
              點我計算
            </Button>
          </Form>
        </p>
      </div>
      {/* <div className="card-footer text-muted">2 days ago</div> */}
    </div >
  );
}

export default App;
