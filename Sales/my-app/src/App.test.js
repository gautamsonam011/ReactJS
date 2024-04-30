import { render, screen } from '@testing-library/react';
import App from './App';

import GiftCard from './Pages/GiftCard';
import Orders from './Pages/Orders';
import POS from './Pages/POS';
import SalesReturns from './Pages/SalesReturns';
import Coupons from './Coupons-Components/Coupons';

test('renders learn react link', () => {
 
  render(<App />);
  render(<Coupons/>);
  render(<GiftCard/>);
  render(<Orders/>);
  render(<POS/>);
  render(<SalesReturns/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
