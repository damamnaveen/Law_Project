// // src/components/BillingItem.js

// import React from 'react';

// const BillingItem = ({ index, item, onItemChange }) => {
//   const handleChange = (field, value) => {
//     onItemChange(index, field, value);
//   };

//   return (
//     <div className=''>
//       <input
//         type="text"
//         value={item.description}
//         onChange={(e) => handleChange('description', e.target.value)}
//         placeholder="Case Description"
//       />
//       <input
//         type="number"
        
//         value={item.hours}
//         onChange={(e) => handleChange('hours', parseFloat(e.target.value))}
//         placeholder="Hours"
//       />
//       <input
//         type="number"
//         value={item.rate}
//         onChange={(e) => handleChange('rate', parseFloat(e.target.value))}
//         placeholder="Rate"
//       />
//       {/* <input type="number"
//        className="form-control"
//        value={item.Taxes}
//        onChange={(e)=> handleChange('Taxes', parseFloat(e.target.value))} 
//        placeholder='Taxes'></input> */}
//     </div>
//   );
// };

// export default BillingItem;


// let itemCounter = 0;
 
//   function addInvoiceItem() {
//     itemCounter++;

//     const newItemRow = `
//     <tr id="itemRow${itemCounter}">
//     <td><input type="text" className="form-control placeholder="Enter Description" required></td>
//     <td><input type="number" className="form-control quantity" placeholder="Enter Quantity" required></td>
//     <td><input type="number" className="form-control unitPrice" disabled readonly></td>
//     <td><button type="button" className="btn btn-danger" onclick="removeInvoice(${itemCounter})">Remove</button></td>
//     `;

//     $("#invoiceItems").append(newItemRow);

//     updateTotalAmount();
//   }

//   function removeInvoiceItem(itemId){
//     $(`#itemRow${itemId}`).remove();
//     updateTotalAmount();
//   }

//   function updateTotalAmount(){

//   }