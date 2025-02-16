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

  // Handle date selection from the hidden input
  private handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.selectedDate = input.value; // Keep original YYYY-MM-DD
      this.displayDate = this.formatDate(input.value); // Display formatted date
    }
  }

  render() {
    return (
      <div class="datepicker-container">
        {/* Visible text input (displays formatted date) */}
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
