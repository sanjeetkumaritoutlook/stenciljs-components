import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-datepicker',
  styleUrl: 'my-datepicker.scss',
  shadow: true,
})
export class MyDatepicker {
  @State() selectedDate: string = this.formatDate(new Date());

  // Function to format the date as "DD MMMM YYYY"
  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }

  // Handle date change event
  private handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.selectedDate = this.formatDate(new Date(input.value));
    }
  }

  render() {
    return (
      <div class="datepicker-container">
        <input type="date" onInput={(event) => this.handleDateChange(event)} />
        <p class="formatted-date">{this.selectedDate}</p>
      </div>
    );
  }
}
