// GiftCard.js
import React, { useState } from 'react';
import './GiftCard.css';

const GiftCard = () => {
  // Sample gift card data
  const [giftCards, setGiftCards] = useState([
    {
      serialNo: 'GC001',
      customer: 'Customer Y',
      cardNumber: '1234 5678 9012 3456',
      amount: 50,
      expense: 0,
      expire: '2024-12-31',
      balance: 50,
      updatedAt: '2024-04-30',
      updatedBy: 'Admin'
    },
    {
        serialNo: 'GC001',
        customer: 'Customer Y',
        cardNumber: '1234 5678 9012 3456',
        amount: 50,
        expense: 0,
        expire: '2024-12-31',
        balance: 50,
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        serialNo: 'GC001',
        customer: 'Customer Y',
        cardNumber: '1234 5678 9012 3456',
        amount: 50,
        expense: 0,
        expire: '2024-12-31',
        balance: 50,
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        serialNo: 'GC001',
        customer: 'Customer Y',
        cardNumber: '1234 5678 9012 3456',
        amount: 50,
        expense: 0,
        expire: '2024-12-31',
        balance: 50,
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        serialNo: 'GC001',
        customer: 'Customer Y',
        cardNumber: '1234 5678 9012 3456',
        amount: 50,
        expense: 0,
        expire: '2024-12-31',
        balance: 50,
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
    // Add more gift card data as needed
  ]);

  return (
    <div className="gift-card-container">
      <h2>Gift Card</h2>
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
              <th>Serial No.</th>
              <th>Customer</th>
              <th>Card Number</th>
              <th>Amount</th>
              <th>Expense</th>
              <th>Expire</th>
              <th>Balance</th>
              <th>Updated At</th>
              <th>Updated By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {giftCards.map((giftCard, index) => (
              <tr key={index}>
                <td>{giftCard.serialNo}</td>
                <td>{giftCard.customer}</td>
                <td>{giftCard.cardNumber}</td>
                <td>{giftCard.amount}</td>
                <td>{giftCard.expense}</td>
                <td>{giftCard.expire}</td>
                <td>{giftCard.balance}</td>
                <td>{giftCard.updatedAt}</td>
                <td>{giftCard.updatedBy}</td>
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

export default GiftCard;
