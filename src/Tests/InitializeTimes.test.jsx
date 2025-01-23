import { initializeTimes } from '../Componants/BookingPage';

test ("initializeTimes return correct initial times", () => {
    const result = initializeTimes();
    expect(result).toEqual(["17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM"]);
});