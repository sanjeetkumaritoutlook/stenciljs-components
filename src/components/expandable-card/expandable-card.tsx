import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'expandable-card',
  styleUrl: 'expandable-card.scss',
  shadow: true,
})
export class ExpandableCard {
  /** Card Theme */
  @Prop() theme: 'light' | 'dark' | 'primary' | 'danger' = 'light';
  
  /** Card Label */
  @Prop() label: string = 'Card Title';
  
  /** Card Content */
  @Prop() content: string = 'This is a dynamic card component.';
  
  /** Button Text */
  @Prop() buttonText: string = 'Click Me';
  
  /** Button Type */
  @Prop() buttonType: 'primary' | 'secondary' = 'primary';
  
  /** Image URL */
  @Prop() imageUrl: string = ''; 
  
  /** Link (If provided, card is clickable) */
  @Prop() link: string = ''; 
  
  /** Expandable Card Toggle */
  @Prop() expandable: boolean = false; 

  /** State for Expansion */
  @State() isExpanded: boolean = false;

  /** Toggle Expand State */
  private toggleExpand = () => {
    if (this.expandable) {
      this.isExpanded = !this.isExpanded;
    }
  };

  render() {
    return (
      <div class={`card ${this.theme}`} onClick={this.toggleExpand}>
        {this.imageUrl && <img class="card-image" src={this.imageUrl} alt="Card Image" />}
          <h4>Expandable Card</h4>
        <div class="card-content">
          <h2 class="card-title">
            {this.label}
            {this.expandable && <span class="expand-icon">{this.isExpanded ? '🔼' : '🔽'}</span>}
          </h2>
          <p>{this.content}</p>

          {/* Expandable Content */}
          <div class={`extra-content ${this.isExpanded ? 'expanded' : ''}`}>
            <p>More details about this card... 🌟</p>
          </div>

          {/* Button */}
          <button class={`card-button ${this.buttonType}`}>{this.buttonText}</button>
        </div>

        {/* Clickable Card Wrapper */}
        {this.link && (
          <a href={this.link} class="click-overlay" target="_blank" rel="noopener noreferrer"></a>
        )}
      </div>
    );
  }
}
