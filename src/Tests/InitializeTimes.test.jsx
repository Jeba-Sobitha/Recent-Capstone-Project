import { fetchAPI } from '../api';
import { initializeTimes } from '../Componants/BookingPage';

jest.mock('../api', () => ({
    fetchAPI: jest.fn(),
}));

test ("initializeTimes return correct initial times", () => {
    const mockTimes = ["17:00 PM", "18:00 PM", "19:00 PM", "20:00 PM"];
    fetchAPI.mockReturnValue(mockTimes);

    const results = initializeTimes();
    results.availableTimes = mockTimes;
    expect(results.availableTimes).toEqual(mockTimes);
});
