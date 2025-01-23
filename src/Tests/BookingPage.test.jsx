import { render, screen} from "@testing-library/react";
import BookingPage from "../Componants/BookingPage";


test ('Renders the BookingPage heading', () => {
    render(<BookingPage/>);
    const headingElement = screen.getByText(/Make a Reservation/i);
    expect(headingElement).toBeInTheDocument();
});


//App.test.js
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
