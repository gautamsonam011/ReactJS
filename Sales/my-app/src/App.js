import React, { useState } from 'react';
import './Pages/Component-Order/Orders.css';


const OrderPage = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: 0,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    warehouse: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
   
    setFormData({
      productName: '',
      quantity: 0,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      warehouse: '',
      paymentMethod: ''
    });
  };

  return (
    <div className="order-container">
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="warehouse">Warehouse:</label>
          <select
            id="warehouse"
            name="warehouse"
            value={formData.warehouse}
            onChange={handleChange}
            required
          >
            <option value="">Select Warehouse</option>
            <option value="warehouse1">Warehouse 1</option>
            <option value="warehouse2">Warehouse 2</option>
            <option value="warehouse3">Warehouse 3</option>
          </select>
        </div>
        <button type="submit">Filter</button>
      </form>

      <h2>Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Warehouse</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Due</th>
            <th>Payment Method</th>
            <th>Payment Status</th>
            <th>Order Status</th>
            <th>Updated At</th>
            <th>Updated By</th>
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
        </thead>
        <tbody>
          {/* Here you can map through orders and render rows */}
          <tr>
            <td>Product 1</td>
            <td>2</td>
            <td>ria</td>
            <td>ria@example.com</td>
            <td>1234567890</td>
            <td>Warehouse 1</td>
            <td>$100</td>
            <td>$50</td>
            <td>$50</td>
            <td>Credit Card</td>
            <td>Paid</td>
            <td>Shipped</td>
            <td>2024-04-25</td>
            <td>Admin</td>
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
          <tr>
            <td>Product 1</td>
            <td>2</td>
            <td>ria</td>
            <td>ria@example.com</td>
            <td>1234567890</td>
            <td>Warehouse 1</td>
            <td>$100</td>
            <td>$50</td>
            <td>$50</td>
            <td>Credit Card</td>
            <td>Paid</td>
            <td>Shipped</td>
            <td>2024-04-25</td>
            <td>Admin</td>
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
        </tbody>
      </table>
    </div>
  );
};


export default OrderPage;


