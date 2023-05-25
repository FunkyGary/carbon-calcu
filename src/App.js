import "./App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';

//<iframe src="https://funkygary.github.io/carbon-calcu/" style="width: 100%; height: 100%"></iframe>

function App() {
  const [riceCarbon, setRiceCarbon] = useState(0.12)
  const [carbCarbon, setCarbCarbon] = useState(0.124)
  const [meat1Carbon, setMeat1Carbon] = useState(15.5)
  const [meat2Carbon, setMeat2Carbon] = useState(15.5)
  const [vetge1Carbon, setVetge1Carbon] = useState(0.06)
  const [vetge2Carbon, setVetge2Carbon] = useState(0.06)
  const [drinkCarbon, setDrinkCarbon] = useState(0.32)
  const [totalCarbon, setTotalCarbon] = useState(0)
  const [page, setPage] = useState(1)

  return (
    <div className="card text-center rounded mx-auto" style={{ maxWidth: '440px' }}>
      <div className="card-header" style={{ 'backgroundColor': '#00a9e0', color: 'white' }}>你的一餐有多少碳排放呢？</div>
      <div className="card-body">
        {
          page === 2 ?
            <>
              <p className="card-text">你的這一餐總共有：<br /><span style={{ color: '#6EA4D4', fontWeight: 'bold' }} className="h4 text-decoration-underline">{totalCarbon}</span> kgCO2e 二氧化碳當量</p>
              <p className="card-text">約等於：<br />🚗 一台汽車行駛 <span style={{ color: '#E06666', fontWeight: 'bold' }} className="h4 text-decoration-underline">{Math.round(totalCarbon / 0.196974607 * 10) / 10}</span> 公里</p>
              <p className="card-text">🌳 <span style={{ color: '#6AA84F', fontWeight: 'bold' }} className="h4 text-decoration-underline">{Math.ceil(totalCarbon / 0.9)}</span> 棵樹一個月的碳吸收量</p>
              <br />
              <p className="card-text">備註：台灣每人一年平均排放 10.77 公噸二氧化碳，每日平均排放30公斤。</p>
              <p className="card-text">資料來源：
                中華民國國家溫室氣體清冊報告<br />
                環保署產品碳足跡計算服務平台碳足跡資料庫<br />
                衛生福利部國民健康署 食物代換表<br />
                環境品質文教基金會<br />
                Poore & Nemecek (2018) - Reducing food’s environmental impacts through producers and consumers.
                U.S. Environmental Protection Agency</p>
            </>
            :
            <Form className="container">
              <Form.Group className="mb-3 d-flex align-items-center" controlId="formSelect">
                <label className="my-1 mx-4 col"> <span className="d-block d-sm-none">🍚</span > 米飯 <span className="d-none d-sm-inline">🍚</span ></label>
                <Form.Select className="col col-sm" aria-label="Default select example" onChange={e => setRiceCarbon(e.target.value)} value={riceCarbon}>
                  <option value={0.12}>1碗 75公克</option>
                  <option value={0.24}>2碗 150公克</option>
                  <option value={0.36}>3碗 225公克</option>
                  <option value={0.48}>4碗 300公克</option>
                  <option value={0.6}>5碗 375公克</option>
                  <option value={0.72}>6碗 450公克</option>
                  <option value={0}>無</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center" controlId="formSelect">
                <label className="my-1 mx-4 col"> <span className="d-block d-sm-none">🍜</span > 豆魚蛋肉類一 <span className="d-none d-sm-inline">🍜</span ></label>
                <Form.Select className="col" aria-label="Default select example" onChange={e => setCarbCarbon(e.target.value)} value={carbCarbon}>
                  <option value={0.124}>白麵條1碗 100公克</option>
                  <option value={0.25}>白麵條2碗 200公克</option>
                  <option value={0.37}>白麵條3碗 300公克</option>
                  <option value={0.48}>白麵條4碗 400公克</option>
                  <option value={0.1}>馬鈴薯2顆 200公克</option>
                  <option value={0.3}>玉米1根 100公克</option>
                  <option value={0.2}>裸麥吐司4片 120公克</option>
                  <option value={0}>無</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center" controlId="formSelect">
                <label className="my-1 mx-4 col"> <span className="d-block d-sm-none">🍗</span > 豆魚蛋肉類一 <span className="d-none d-sm-inline">🍗</span ></label>
                <Form.Select className="col" aria-label="Default select example" onChange={e => setMeat1Carbon(e.target.value)} value={meat1Carbon}>
                  <option value={15.5}>牛肉 100公克</option>
                  <option value={2.4}>豬肉 100公克</option>
                  <option value={1.82}>雞肉 100公克</option>
                  <option value={1.34}>魚肉 100公克</option>
                  <option value={0.93}>蝦子 100公克</option>
                  <option value={0.24}>豆腐一盒 300公克</option>
                  <option value={0.05}>堅果 100公克</option>
                  <option value={0.32}>雞蛋 2顆</option>
                  <option value={0}>無</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center" controlId="formSelect">
                <label className="my-1 mx-4 col"> <span className="d-block d-sm-none">🍤</span > 豆魚蛋肉類二 <span className="d-none d-sm-inline">🍤</span ></label>
                <Form.Select className="col" aria-label="Default select example" onChange={e => setMeat2Carbon(e.target.value)} value={meat2Carbon}>
                  <option value={15.5}>牛肉 100公克</option>
                  <option value={2.4}>豬肉 100公克</option>
                  <option value={1.82}>雞肉 100公克</option>
                  <option value={1.34}>魚肉 100公克</option>
                  <option value={0.93}>蝦子 100公克</option>
                  <option value={0.24}>豆腐一盒 300公克</option>
                  <option value={0.05}>堅果 100公克</option>
                  <option value={0.32}>雞蛋 2顆</option>
                  <option value={0}>無</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center" controlId="formSelect">
                <label className="my-1 mx-4 col"> <span className="d-block d-sm-none">🍎</span > 蔬菜水果類一 <span className="d-none d-sm-inline">🍎</span ></label>
                <Form.Select className="col" aria-label="Default select example" onChange={e => setVetge1Carbon(e.target.value)} value={vetge1Carbon}>
                  <option value={0.06}>蘋果 1顆</option>
                  <option value={0.11}>香蕉 1根</option>
                  <option value={0.05}>橘子 1顆</option>
                  <option value={0.22}>莓果 144公克</option>
                  <option value={0.05}>甘藍菜 100公克</option>
                  <option value={0.04}>根莖類 100公克</option>
                  <option value={0.32}>番茄 150公克</option>
                  <option value={0}>無</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center" controlId="formSelect">
                <label className="my-1 mx-4 col"> <span className="d-block d-sm-none">🍌</span > 蔬菜水果類二 <span className="d-none d-sm-inline">🍌</span ></label>
                <Form.Select className="col" aria-label="Default select example" onChange={e => setVetge2Carbon(e.target.value)} value={vetge2Carbon}>
                  <option value={0.06}>蘋果 1顆</option>
                  <option value={0.11}>香蕉 1根</option>
                  <option value={0.05}>橘子 1顆</option>
                  <option value={0.22}>莓果 144公克</option>
                  <option value={0.05}>甘藍菜 100公克</option>
                  <option value={0.04}>根莖類 100公克</option>
                  <option value={0.32}>番茄 150公克</option>
                  <option value={0}>無</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 d-flex align-items-center" controlId="formSelect">
                <label className="my-1 mx-4 col"> <span className="d-block d-sm-none">☕</span > 點心飲料 <span className="d-none d-sm-inline">☕</span ></label>
                <Form.Select className="col" aria-label="Default select example" onChange={e => setDrinkCarbon(e.target.value)} value={drinkCarbon}>
                  <option value={0.6}>牛奶1杯 250公克</option>
                  <option value={0.3}>米漿1杯 250公克</option>
                  <option value={0.25}>豆漿1杯 250公克</option>
                  <option value={0.48}>優酪乳1份 250公克</option>
                  <option value={0.4}>咖啡1杯 15公克咖啡豆</option>
                  <option value={0.12}>紅茶1份 300毫升</option>
                  <option value={0.14}>奶茶1份 300毫升</option>
                  <option value={0.19}>鳳梨酥1顆 35公克</option>
                  <option value={0.95}>黑巧克力1片 50公克</option>
                  <option value={0.17}>花生1包 250公克</option>
                  <option value={0.17}>可樂1罐 330毫升</option>
                  <option value={0.22}>啤酒1罐 330毫升</option>
                  <option value={0.13}>紅酒1杯 150毫升</option>
                  <option value={0}>無</option>
                </Form.Select>
              </Form.Group>
            </Form>
        }
        <Button variant="primary" className="w-100 border-0" style={{ 'backgroundColor': '#ed8c01', color: 'white' }} onClick={() => {
          if (page === 2) {
            setTotalCarbon(0)
            setPage(1)
          } else {
            let total = riceCarbon * 1 + meat2Carbon * 1 + meat1Carbon * 1 + carbCarbon * 1 + drinkCarbon * 1 + vetge2Carbon * 1 + vetge1Carbon * 1
            setTotalCarbon(Math.round(total * 100) / 100)
            setPage(2)
          }
        }}>
          {page === 2 ? '點我重新計算' : '點我計算'}
        </Button>
      </div>
    </div >
  );
}

export default App;
