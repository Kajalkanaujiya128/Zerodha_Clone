import React, {useState,useEffect} from "react";

import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
const Holdings=()=>{
    const [allHoldings,setAllHoldings]=useState([]);

    useEffect(()=>{
   axios.get("https://zerodha-clone-5b2m.onrender.com/allHoldings").then((res)=>{
   
    setAllHoldings(res.data);
 })
         .catch((err) => {
            console.log("ERROR:", err);
        });
    },[]);

      const labels=allHoldings.map((subArray)=>subArray.name);
      const data={
        labels,
        datasets:[
                {
      label: 'Stock Name',
      data: allHoldings.map((stock) => stock.price ),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
        ]
      }
    return(
        <>
        <h3 className="title">Holdings ({allHoldings.length})</h3>
        {/* <div className="order-table">
            <table>

                <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Curr. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>
                {allHoldings.map((stock,index)=>{
                    const curValue=stock.price*stock.qty;
                    const isProfit=curValue-stock.avg*stock.qty>=0.0;
                    const profClass=isProfit ? "profit":"loss";
                    const dayClass=stock.isLoss ?"loss" :"profit";
                    return(
                        <tr key={index} >
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profClass}>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                </tr>
                    )
                })}
            </table>
        </div> */}

{/* Desktop Table */}
<div className="order-table holdings-desktop">
  <table>
    <thead>
      <tr>
        <th>Instrument</th>
        <th>Qty.</th>
        <th>Avg. cost</th>
        <th>LTP</th>
        <th>Curr. val</th>
        <th>P&L</th>
        <th>Net chg.</th>
        <th>Day chg.</th>
      </tr>
    </thead>

    <tbody>
      {allHoldings.map((stock, index) => {
        const curValue = stock.price * stock.qty;
        const profit = curValue - stock.avg * stock.qty;
        const profClass = profit >= 0 ? "profit" : "loss";
        const dayClass = stock.day?.startsWith("-") ? "loss" : "profit";

        return (
          <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{curValue.toFixed(2)}</td>
            <td className={profClass}>{profit.toFixed(2)}</td>
            <td className={profClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

{/* Mobile Cards */}
<div className="holdings-mobile">
  {allHoldings.map((stock, index) => {
    const curValue = stock.price * stock.qty;
    const profit = curValue - stock.avg * stock.qty;
    const profClass = profit >= 0 ? "profit" : "loss";
    const dayClass = stock.day?.startsWith("-") ? "loss" : "profit";

    return (
      <div className="holding-card" key={index}>
        <div className="holding-card-header">
          <h4>{stock.name}</h4>
          <span className={profClass}>
            {profit >= 0 ? "+" : ""}{profit.toFixed(2)}
          </span>
        </div>

        <div className="holding-card-details">
          <div>
            <small>Quantity</small>
            <p>{stock.qty}</p>
          </div>
          <div>
            <small>Avg. Cost</small>
            <p>{stock.avg.toFixed(2)}</p>
          </div>
          <div>
            <small>LTP</small>
            <p>{stock.price.toFixed(2)}</p>
          </div>
          <div>
            <small>Current Value</small>
            <p>{curValue.toFixed(2)}</p>
          </div>
          <div>
            <small>Net Change</small>
            <p className={profClass}>{stock.net}</p>
          </div>
          <div>
            <small>Day Change</small>
            <p className={dayClass}>{stock.day}</p>
          </div>
        </div>
      </div>
    );
  })}
</div>

        <div className="row">
            <div className="col">
                <h5>
                    29,875.<span>55</span>{" "}
                </h5>
                <p>Total investment</p>
            </div>
            <div className="col">
                <h5>
                    31,428.<span>95</span>{" "}
                </h5>
                <p>Current value</p>
            </div>
            <div className="col">
                <h5>1,553.40 (+5.20%)</h5>
                <p>P&L</p>
            </div>
        </div>
        <VerticalGraph data={data}/>
        </>
    );
};
export default Holdings;
