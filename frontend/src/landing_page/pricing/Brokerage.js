import React from "react";

function Brokerage() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-4 ">
                 <a href="https://zerodha.com/brokerage-calculator/"   target="_blank"
  rel="noreferrer" style={{textDecoration:"none"}}>
                    <h3 className="fs-5">Brokerage calculator</h3>  </a> 
                    <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"12px"}} className="text-muted " >
                        <li>Call & Trade and PMS auto-squareoff:Additional charges of ₹50 +
                        GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies ofo contract notes,if required, shall be charged
                        ₹ 20 per contract note. Courier charges apply.</li>
                        <li>For NRI OpenAccount(non-PIS), 0.5% or ₹100 per excuted order for equity(whichever
                        is lower).</li>
                       <li> For NRI account(PIS) ,0.5% or ₹200 per excuted order
                        for equity (whichever is lower).</li> 
                       <li> If the account is in debit balance, any order placed sill be charged ₹40 per excuted order
                        instead of ₹20 per excuted order.</li>
                    </ul>
                    
                  
                </div>
                <div className="col-4 p-4">
                <a href="https://zerodha.com/charges/"   target="_blank"
  rel="noreferrer" style={{textDecoration:"none"}}>
                    <h3 className="fs-5">List of charges</h3></a> 
                </div>
            </div>

        </div>
    );
}

export default Brokerage;