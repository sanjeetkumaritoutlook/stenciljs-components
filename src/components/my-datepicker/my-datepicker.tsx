import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-datepicker',
  styleUrl: 'my-datepicker.scss',
  shadow: true,
})
export class MyDatepicker {
  @State() selectedDate: string = ''; // Stores YYYY-MM-DD format
  @State() displayDate: string = ''; // Stores formatted display

  private dateInput!: HTMLInputElement; // Reference to the hidden date input

  // Format the date as "DD MMMM YYYY"
  private formatDate(date: string): string {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  }

  // Function to log different formats to the console
  private logDateFormats(date: string) {
    const dateObj = new Date(date);
    const formattedDDMMYYYY = `${dateObj.getDate().toString().padStart(2, '0')}-${(dateObj.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${dateObj.getFullYear()}`;

    const isoFormat = dateObj.toISOString(); // Full ISO format

    console.log("📅 Selected Date Formats:");
    console.log("✔ DD MMMM YYYY:", this.formatDate(date));
    console.log("✔ DD-MM-YYYY:", formattedDDMMYYYY);
    console.log("✔ ISO String:", isoFormat);
  }

  // Handle date selection from the hidden input
  private handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.selectedDate = input.value; // Keep original YYYY-MM-DD
      this.displayDate = this.formatDate(input.value); // Display formatted date
      this.logDateFormats(input.value); // Log formats to console
    }
  }

  render() {
    return (
      <div class="datepicker-container">
        {/* Visible text input (displays formatted date) */}
        <h3>Datepicker display date in DD MMMM YYYY</h3>
        <input
          type="text"
          placeholder="Select a date"
          value={this.displayDate}
          readonly
          onClick={() => this.dateInput.showPicker()} // Open the hidden calendar
        />

        {/* Hidden native date input */}
        <input
          type="date"
          ref={(el) => (this.dateInput = el as HTMLInputElement)}
          onInput={(event) => this.handleDateChange(event)}
        />
      </div>
    );
  }
}
