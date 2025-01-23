import { updateTimes } from '../Componants/BookingPage';


test ("updateTimes return correct state after bookin a slot", ()=> {
    const initialState = {
        availableTimes: ["17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM"],
        bookedTimes: {},
        selectedDate: new Date("2025-02-02"),
    };
    const action = { type: "BOOK_SLOT", payload: "18:00 PM"};
    const expectedState = {
        ...initialState,
        availableTimes: ["17:00 PM", "19:00 PM", "20:00 PM"],
        bookedTimes: {
            "2025-02-02": ["18:00 PM"],
        },
    };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedState);
});
