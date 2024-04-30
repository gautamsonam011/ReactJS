// Coupons.js
import React, { useState } from 'react';
import './Coupons.css';

const Coupons = () => {
  // Sample coupon data
  const [coupons, setCoupons] = useState([
    {
      code: 'ABC123',
      amount: 10,
      quantity: 100,
      expire: '2024-12-31',
      updatedAt: '2024-04-30',
      updatedBy: 'Admin'
    },
    {
        code: 'ABC123',
        amount: 10,
        quantity: 100,
        expire: '2024-12-31',
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        code: 'ABC123',
        amount: 10,
        quantity: 100,
        expire: '2024-12-31',
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        code: 'ABC123',
        amount: 10,
        quantity: 100,
        expire: '2024-12-31',
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        code: 'ABC123',
        amount: 10,
        quantity: 100,
        expire: '2024-12-31',
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
    // Add more coupons as needed
  ]);

  return (
    <div className="coupons-container">
      <div className="entries-section">
        <h3>Rows</h3>
        <select>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Amount</th>
              <th>Quantity</th>
              <th>Expire</th>
              <th>Updated At</th>
              <th>Updated By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, index) => (
              <tr key={index}>
                <td>{coupon.code}</td>
                <td>{coupon.amount}</td>
                <td>{coupon.quantity}</td>
                <td>{coupon.expire}</td>
                <td>{coupon.updatedAt}</td>
                <td>{coupon.updatedBy}</td>
                <td>
                  <div className="dropdown">
                    <button className="dropbtn">Action</button>
                    <div className="dropdown-content">
                      <a href="#">Edit</a>
                      <a href="#">Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coupons;
