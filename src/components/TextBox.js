import React from 'react';


class TextBox extends React.Component {

   // onInputChange(event) {
   //     console.log(event.target.value)
   // }



    render(){
        return(
            <div className="ui three steps">
                <div className="step">
                    <div className="content">
                        <div className="title">Shipping</div>
                        <div className="description">Choose your shipping options</div>
                    </div>
                </div>
                <div className="active step">
                    <div className="content">
                        <div className="title">Billing</div>
                        <div className="description">Enter billing information</div>
                    </div>
                </div>
                <div className="disabled step">
                    <div className="content">
                        <div className="title">Confirm Order</div>
                        <div className="description">Review your order details</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextBox;