import { fireEvent, render, screen } from "@testing-library/react"
import BookingForm from "../Componants/BookingForm"


test("Validates HTML5 attributes on the name filed", () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occassionInput = screen.getByLabelText(/occassion/i);

    expect(nameInput).toHaveAttribute("required");
    expect(nameInput).toHaveAttribute("minLength", "2");
    expect(nameInput).toHaveAttribute("maxLength", "50");
    expect(nameInput).toHaveAttribute("pattern", "^[A-Za-z\\s]+$");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("required");
    expect(timeInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(occassionInput).toHaveAttribute("required");
});

// test("submit button is disabled when form is invalid", async () => {
//     render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
//     const submitButton = screen.getByRole("button", {name: /submit/i});

//     expect(submitButton).toBeDisabled();

//     fireEvent.change(screen.getByLabelText(/name/i), {target: {value: "John Das" }});
//     fireEvent.change(screen.getByLabelText(/email/i), {target: {value: "johndas@gmail.com" }});
//     fireEvent.change(screen.getByLabelText(/date/i), {target: {value: "2025-02-02" }});
//     fireEvent.change(screen.getByLabelText(/time/i), {target: {value: "18:00" }});
//     fireEvent.change(screen.getByLabelText(/number of guests/i), {target: {value: "3" }});
//     fireEvent.change(screen.getByLabelText(/occassion/i), {target: {value: "Birthday" }});

//     await screen.findByRole("button", {name: /submit/i});
//     expect(submitButton).not.toBeDisabled();

// });

test("displays error message for invalid email", () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", {name: /submit/i});

    fireEvent.change(emailInput, {target: {value: "invalidemail" }});
    fireEvent.click(submitButton);

    // expect(emailInput.validity.valid).toBe(false);

    expect(emailInput.validationMessage).not.toBe("");
});