import { render, screen } from "@testing-library/react";
import BookingPage from "../Componants/BookingPage";
import { MemoryRouter } from "react-router-dom";
import { fetchAPI } from "../api";

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

test("Renders the BookingPage heading", () => {

  const mockTimes = ["17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM"];
  fetchAPI.mockReturnValue(mockTimes);
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/Make a Reservation/i);
  expect(headingElement).toBeInTheDocument();
});

// test ("initializeTimes return correct initial times", () => {
//     const mockTimes = ["17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM"];
//     fetchAPI.mockReturnValue(mockTimes);

//     const results = initializeTimes;
//     expect(results.availableTimes).toEqual(mockTimes);
// });

// test ("updateTimes return correct state after bookin a slot", ()=> {
//     const initialState = {
//         availableTimes: ["17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM"],
//         bookedTimes: {},
//         selectedDate: new Date("2023-01-01"),
//     };
//     const action = { type: "BOOK_SLOT", payload: "18:00 PM"};
//     const expectedState = {
//         ...initialState,
//         availableTimes: ["17:00 PM", "19:00 PM", "20:00 PM"],
//         bookedTimes: {
//             "2023-01-01": ["18:00 PM"],
//         },
//     };
//     const result = updateTimes(initialState, action);
//     expect(result).toEqual(expectedState);
// });

//App.test.js
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
