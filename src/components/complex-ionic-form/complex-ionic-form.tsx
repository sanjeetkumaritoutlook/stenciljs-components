import { Component, State, h } from '@stencil/core';
import '@ionic/core';
//use mock API services like JSONPlaceholder, Mocky, or Postman to simulate API requests.
//JSONPlaceholder is a free online REST API for testing and prototyping.

@Component({
  tag: 'complex-ionic-form',
  styleUrl: 'complex-ionic-form.css',
  shadow: true,
})
export class ComplexIonicForm {
  @State() name: string = '';
@State() email: string = '';
@State() password: string = '';
@State() confirmPassword: string = '';
@State() selectedOption: string = '';
@State() showAlert: boolean = false;
@State() alertMessage: string = '';
@State() comments:string = '';
@State() submitted: boolean = false;

validateForm() {
  if (!this.name || !this.email || !this.password || !this.confirmPassword || !this.selectedOption) {
    this.alertMessage = 'All fields are required!';
    this.showAlert = true;
    return false;
  }
  if (this.password !== this.confirmPassword) {
    this.alertMessage = 'Passwords do not match!';
    this.showAlert = true;
    return false;
  }
  return true;
}

//made async because error   'await' expressions are only allowed within async functions and at the top levels of modules.
async handleSubmit(event: Event) {
  event.preventDefault();
  if (this.validateForm()) {
    const formData = {
      name: this.name,
      email: this.email,
      password: this.password,
      selectedOption: this.selectedOption,
      comments: this.comments,
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      this.alertMessage = `Form submitted successfully! Response: ${data.id}`;
      this.submitted = true; // Indicate that form is submitted
    } catch (error) {
      this.alertMessage = `Error: ${error.message}`;
    } finally {
      this.showAlert = true;
    }
  }
}

render() {
  return (
    <div>
    {!this.submitted ? (
    <form onSubmit={(event) => this.handleSubmit(event)}>
      <h1>Complex form built entirely with Ionic components</h1>
      <ion-item>
        <ion-label position="stacked">Name</ion-label>
        <ion-input required value={this.name} onInput={(e) => this.name = (e.target as HTMLInputElement).value}></ion-input>
      </ion-item>
      
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input type="email" required value={this.email} onInput={(e) => this.email = (e.target as HTMLInputElement).value}></ion-input>
      </ion-item>
      
      <ion-item>
        <ion-label position="stacked">Password</ion-label>
        <ion-input type="password" required value={this.password} onInput={(e) => this.password = (e.target as HTMLInputElement).value}></ion-input>
      </ion-item>
      
      <ion-item>
        <ion-label position="stacked">Confirm Password</ion-label>
        <ion-input type="password" required value={this.confirmPassword} onInput={(e) => this.confirmPassword = (e.target as HTMLInputElement).value}></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Options</ion-label>
        <ion-select value={this.selectedOption} onIonChange={(e) => this.selectedOption = e.detail.value}>
          <ion-select-option value="option1">Option 1</ion-select-option>
          <ion-select-option value="option2">Option 2</ion-select-option>
          <ion-select-option value="option3">Option 3</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Comments</ion-label>
        <ion-textarea value={this.comments} onInput={(e) => this.comments = (e.target as HTMLTextAreaElement).value}></ion-textarea>
      </ion-item>

      <ion-button expand="full" type="submit">Submit</ion-button>

      <ion-alert
        isOpen={this.showAlert}
        onDidDismiss={() => this.showAlert = false}
        header="Alert"
        message={this.alertMessage}
        buttons={['OK']}
      />
    </form>
  ): (
    <div>
      <h2>Submitted Data</h2>
      <p><strong>Name:</strong> {this.name}</p>
      <p><strong>Email:</strong> {this.email}</p>
      <p><strong>Selected Option:</strong> {this.selectedOption}</p>
      <p><strong>Comments:</strong> {this.comments}</p>
      <ion-button onClick={() => this.resetForm()}>Submit Another Response</ion-button>
    </div>
  )}
</div>
  );
}

resetForm() {
  this.name = '';
  this.email = '';
  this.password = '';
  this.confirmPassword = '';
  this.selectedOption = '';
  this.comments = '';
  this.submitted = false; // Reset submission state
}

}
