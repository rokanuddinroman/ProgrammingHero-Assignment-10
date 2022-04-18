import React from 'react';
import './CheckOut.css'
const CheckOut = () => {
    return (
        <div className='container'>
            <div className="checkout__container">
                <img src="https://thumbs.dreamstime.com/b/process-successfully-completed-vector-icon-129672573.jpg" alt="" />
                <form>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your Phone Number' />
                    <input type="text" placeholder='Your Address' />
                    <input type="text" placeholder='Optional Message' />
                    <div><button style={{ margin: 'auto', marginLeft: '30%' }} className="primary__button">Check Procced</button></div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;