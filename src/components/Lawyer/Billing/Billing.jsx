// // src/components/BillingStatement.js

// import React, { useState } from 'react';
// import BillingItem from './BillingItem';
// import './Billing.css';

// const Billing = () => {
//   const [items, setItems] = useState([{ description: '', hours: 0, rate: 0 }]);
//   const [total, setTotal] = useState(0);

//   const addItem = () => {
//     setItems([...items, { description: '', hours: 0, rate: 0 }]);
//   };

//   const handleItemChange = (index, field, value) => {
//     const newItems = items.map((item, i) => 
//       i === index ? { ...item, [field]: value } : item
//     );
//     setItems(newItems);
//     calculateTotal(newItems);
//   };

//   const calculateTotal = (items) => {
//     const newTotal = items.reduce((sum, item) => sum + item.hours * item.rate, 0);
//     setTotal(newTotal);
//   };

//   return (
//     <div className='text-center'><br/>
//       <h1 className='text-center'>Law Billing Statement</h1><br/>
//       {items.map((item, index) => (
//         <BillingItem
//           key={index}
//           index={index}
//           item={item}
//           onItemChange={handleItemChange}
//         />
//       ))}<br/>
//       <button className="btn btn-outline-success" onClick={addItem}>Add Item</button>
//       <h2 className='text-center'>Total: ${total.toFixed(2)}</h2><br/>
//     </div>
//   );
// };

// export default Billing;
import '../Billing/BillingItem.jsx';

export function Billing() {
  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">Transperency in Billing</h2>
      <form>
        <div className="row mt-5 mb-5">
          <div className="form-group col-md-6">
            <label>Customer Name</label>
            <input type="text" className="form-control" placeholder="Enter Customer Name"></input>
          </div>
          <div className="form-group col-md-6">
            <label>Invoice Date</label>
            <input type="date" className="form-control" disabled readOnly></input>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Client Name</th>
              <th scope="col">Case Type</th>
              <th scope="col">Case Price</th>
              <th scope="col">Taxes</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Kumar</th>
              <th scope="col">Criminal Case</th>
              <th scope="col">Rs. 90,000</th>
              <th scope="col">1472</th>
              <th scope="col">Rs. 91,472</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">John</th>
              <th scope="col">Family Case</th>
              <th scope="col">Rs. 1,40,000</th>
              <th scope="col">4,500</th>
              <th scope="col">Rs. 1,44,500</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col">Rishi</th>
              <th scope="col">Family Case</th>
              <th scope="col">Rs. 30,000</th>
              <th scope="col">1,500</th>
              <th scope="col">Rs. 31,500</th>
            </tr>
          </thead>
          <tbody id="invoiceItems"></tbody>
        </table>
        <button type="button" className="btn btn-primary" onClick="addInvoiceItem">Add Item</button>
        <div className="mt-4 mb-2">
          <div className="col-md-6">
            <button type="submit" className="btn btn-success">Generate Invoice </button>
          </div>
          <div className="form-group col-md-6 mt-5">
            <label>Total Amount:</label>
            <input type="text" className="form-control" disabled readOnly></input>
          </div>
        </div>
      </form>
      <button className="btn btn-danger btn-print mt-4">Print Invoice</button>
    </div>
  )
}

export default Billing;