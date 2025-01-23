import { updateTimes } from '../Componants/BookingPage';

test("update state returns current state", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00"];
    const action = { type: "UNKNOWN_ACTION" }; // Create an action that doesn't match any case
    const result = updateTimes(initialState, action); // Call the reducer with the initial state and action
    expect(result).toEqual(initialState); // Ensure the state doesn't change
})