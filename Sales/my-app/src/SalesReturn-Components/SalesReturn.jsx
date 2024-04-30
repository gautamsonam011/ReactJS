// SalesReturn.js
import React, { useState } from 'react';
import './SalesReturn.css';

const SalesReturn = () => {
  // Sample sales return data
  const [salesReturns, setSalesReturns] = useState([
    {
      salesNo: 'SR001',
      warehouse: 'Warehouse A',
      customer: 'Customer X',
      date: '2024-04-30',
      total: 200,
      updatedAt: '2024-04-30',
      updatedBy: 'Admin'
    },
    {
        salesNo: 'SR001',
        warehouse: 'Warehouse A',
        customer: 'Customer X',
        date: '2024-04-30',
        total: 200,
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        salesNo: 'SR001',
        warehouse: 'Warehouse A',
        customer: 'Customer X',
        date: '2024-04-30',
        total: 200,
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        salesNo: 'SR001',
        warehouse: 'Warehouse A',
        customer: 'Customer X',
        date: '2024-04-30',
        total: 200,
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
      {
        salesNo: 'SR001',
        warehouse: 'Warehouse A',
        customer: 'Customer X',
        date: '2024-04-30',
        total: 200,
        updatedAt: '2024-04-30',
        updatedBy: 'Admin'
      },
    // Add more sales return data as needed
  ]);

  return (
    <div className="sales-return-container">
     
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
              <th>Sales No.</th>
              <th>Warehouse</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Updated At</th>
              <th>Updated By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {salesReturns.map((salesReturn, index) => (
              <tr key={index}>
                <td>{salesReturn.salesNo}</td>
                <td>{salesReturn.warehouse}</td>
                <td>{salesReturn.customer}</td>
                <td>{salesReturn.date}</td>
                <td>{salesReturn.total}</td>
                <td>{salesReturn.updatedAt}</td>
                <td>{salesReturn.updatedBy}</td>
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

export default SalesReturn;
