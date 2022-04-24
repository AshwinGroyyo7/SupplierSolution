import React, { useState } from "react";
import CustomText from "./components/CustomText";
import ReactSlider from "react-slider";
import axios from "axios";
import './App.css';

const App = () => {
  const [kp1, setKP1] = useState(0);
  const [kp2, setKP2] = useState(0);
  const [kp3, setKP3] = useState(0);
  const [kp4, setKP4] = useState(0);
  const [kp5, setKP5] = useState(0)

  const handleChangeSlider = (type, value) => {
      console.log("IN slider chage", value);
      if(type==="kp1"){
        setKP1(value)
      }else if(type==="kp2"){
        setKP2(value)
      }else if(type==="kp3"){
        setKP3(value)
      }else if(type==="kp4"){
        setKP4(value)
      }else if(type==="kp5"){
        setKP5(value)
      }
  }

  const handleSubmitClick = async () => {
    if(kp1+kp2+kp3+kp4+kp5 ===100){
      alert("Value is 100")
      const reqData = {
          acceptanceQualityLevelWeightage: kp1/100,
          avgResponseTimeWeightage : kp2/100,
          sampleAcceptanceRateWeightage : kp3/100,
          samplingTimeWeightage : kp4/100,
          certificationCountWeightage : kp5/100
      }
        axios({
          method: 'post',
          url: 'https://tb8ayrs35j.execute-api.ap-south-1.amazonaws.com/default/TopsisLambda/topsis',
          data: reqData
        })
        .then((res) => {
          console.log("Res", res.data)
        }).catch((err) => {
          console.log(err)
        }) 
    }else if(kp1+kp2+kp3+kp4+kp5 < 100){
      alert("KPIs value are less than 100")
    }else if (kp1+kp2+kp3+kp4+kp5 > 100){
      alert("KPIs value are greater than 100")
    }
  }

  return (
    <>
      <div className="row-aligned" style={{ justifyContent: "space-between", padding: "30px 40px 0px 60px" }}>
        <img src="/gl1.png" alt="logo" height={100} />
        <div className="row-aligned">
          <CustomText textType="regular_16"
            styles={{ color: "#e77b35", marginRight: 50 }}
            text="Our Company" />
          <CustomText textType="regular_16"
            styles={{ color: "#e77b35", marginRight: 50 }}
            text="Insights" />
          <CustomText textType="regular_16"
            styles={{ color: "#e77b35", marginRight: 50 }}
            text="FAQ" />
          <div className="login-button">
            <CustomText textType="semibold_16"
              styles={{ color: "#fff" }}
              text="SIGN UP OR LOGIN" />
          </div>
        </div>
      </div>
      <div className="row-aligned" style={{ justifyContent: "space-between", alignItems: "flex-start", padding: "90px 30px 0px 60px" }}>
        <div className="column-aligned">
          <CustomText textType="semibold_36"
            styles={{}}
            text="Supplier Selection" />
          <CustomText textType="regular_16"
            styles={{ marginTop: 20 }}
            text="Choose right supplier right away" />
          <div className="row-aligned" style={{ marginTop: 40 }}>
            <div className="column-aligned">
              <div>
                <CustomText textType="regular_16"
                  styles={{}}
                  text="Brand" />
                <input className="input-field"
                  value=""
                  style={{}} />
              </div>
              <div style={{ marginTop: 20 }}>
                <CustomText textType="regular_16"
                  styles={{}}
                  text="Order Quantity" />
                <input className="input-field"
                  value=""
                  style={{}} />
              </div>
            </div>
            <div className="column-aligned">
              <div>
                <CustomText textType="regular_16"
                  styles={{}}
                  text="Category" />
                <input className="input-field"
                  value=""
                  style={{}} />
              </div>
              <div style={{ marginTop: 20 }}>
                <CustomText textType="regular_16"
                  styles={{}}
                  text="Styles" />
                <input className="input-field"
                  value=""
                  style={{}} />
              </div>
            </div>
          </div>
        </div>
        <img src="/puzzle-image.png" alt="puzzle" height={300} />
      </div>
      <div className="row-aligned" style={{ justifyContent: "center", marginTop: 30 }}>
          <CustomText textType="semibold_36"
            styles={{  textAlign: "center" }}
            text="Get Started" />
      </div>
      <div className="column-aligned" style={{ width: "70%", justifyContent : "center",alignItems : "center" }}>
        <div className="row-aligned">
          <CustomText textType="regular_16"
            styles={{}}
            text="KPI1" />
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={0}
            max={100}
            defaultValue={0}
            value={kp1}
            onChange={(val) => handleChangeSlider("kp1",val )}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
          <CustomText textType="regular_16"
            styles={{}}
            text="KPI2" />
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={0}
            max={100}
            defaultValue={0}
            value={kp2}
            onChange={(val) => handleChangeSlider("kp2",val )}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
        </div>
        <div className="row-aligned" style={{ marginTop: 50 }}>
          <CustomText textType="regular_16"
            styles={{}}
            text="KPI3" />
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={0}
            max={100}
            defaultValue={0}
            value={kp3}
            onChange={(val) => handleChangeSlider("kp3",val )}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
          <CustomText textType="regular_16"
            styles={{}}
            text="KPI4" />
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={0}
            max={100}
            defaultValue={0}
            value={kp4}
            onChange={(val) => handleChangeSlider("kp4",val )}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
        </div>
        <div style={{}}>
          <CustomText textType="regular_16"
            styles={{}}
            text="KPI5" />
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            min={0}
            max={100}
            defaultValue={0}
            value={kp5}
            onChange={(val) => handleChangeSlider("kp5",val )}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
      </div>
      </div>
      <div className="row-aligned" style={{ justifyContent: "center", marginTop: 30 }}>
        <div className="login-button" style={{ width: "180px" }}
          onClick={handleSubmitClick}>
          <CustomText textType="semibold_16"
            styles={{ color: "#fff", textAlign: "center" }}
            text="Submit" />
        </div>
      </div>
    </>
  );
}

export default App;
