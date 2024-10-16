import {
  Component,
  Host,
  h,
  State,
  Prop,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'combo-box',
  styleUrl: 'combo-box.css',
  shadow: true,
})
export class ComboBox {
  @State() dropdownList: any;
  @State() value: string;
  @State() showDropdown: boolean = false;

  @Prop() label: string;
  @Prop({ mutable: true }) allowInput: boolean = false;

  @Event() comboBoxInput: EventEmitter<string>;

  handleChange(event) {
    this.value = event.target.value;
    this.dropdownList.unshift({
      id: this.dropdownList.length + 1,
      title: this.value,
    });
    this.dropdownList = this.dropdownList.filter((e) =>
      e.title.includes(this.value)
    );
    console.log(this.allowInput);
  }

  connectedCallback() {
    this.dropdownList = [
      {
        id: 1,
        title: 'quidem molestiae enim',
      },
      {
        id: 2,
        title: 'sunt qui excepturi placeat culpa',
      },
      {
        id: 3,
        title: 'omnis laborum odio',
      },
      {
        id: 4,
        title: 'non esse culpa molestiae omnis sed optio',
      },
      {
        id: 5,
        title: 'eaque aut omnis a',
      },
      {
        id: 6,
        title: 'natus impedit quibusdam illo est',
      },
      {
        id: 7,
        title: 'quibusdam autem aliquid et et quia',
      },
      {
        id: 8,
        title: 'qui fuga est a eum',
      },
      {
        id: 9,
        title: 'saepe unde necessitatibus rem',
      },
      {
        id: 10,
        title: 'distinctio laborum qui',
      },
    ];
  }

  selectItem(id) {
    console.log(
      id,
      this.dropdownList.find((e) => e.id === id)
    );
    this.value = this.dropdownList.find((e) => e.id === id).title;
    this.showDropdown = false;

    this.comboBoxInput.emit(this.dropdownList.find((e) => e.id === id));
  }

  render() {
    return (
      <Host>
        {/* <slot></slot> */}
        <div class="dropdown-list">
          <label class="dropdown">
            {this.label != '' ? this.label : 'Combo-box:'}
            <input
              type="text"
              id="combo-input"
              value={this.value}
              onClick={() =>
                !this.showDropdown
                  ? (this.showDropdown = true)
                  : (this.showDropdown = false)
              }
              onBlur={(event) => this.handleChange(event)}
              readOnly={!this.allowInput}
            />
          </label>

          <ul class="ulClass">
            {this.showDropdown ? (
              this.dropdownList.map((item) => (
                <li
                  class="dropdownItem"
                  onClick={() => this.selectItem(item.id)}
                >
                  {item.title}
                </li>
              ))
            ) : (
              <li></li>
            )}
          </ul>
        </div>

        {/* <select id="mySelect">
          {this.dropdownList.map((item) => (
            <option>{ item.title }</option>
          ))}
        </select> */}
      </Host>
    );
  }
}
