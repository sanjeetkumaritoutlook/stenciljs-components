
import './my-button.css';

export default {
    title: 'Components/MyButton',
    component: 'my-button',
    argTypes: {
      label: { control: 'text' },
      variant: { control: { type: 'select', options: ['primary', 'secondary'] } },
      onClick: { action: 'clicked' }, // Capture the click event
    },
  };
  
  const Template = ({ label, variant }) => `
    <my-button label="${label}" variant="${variant}" onclick="onClick"></my-button>
  `;
  
  export const Primary = Template.bind({});
  Primary.args = {
    label: 'Primary Button',
    variant: 'primary',
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    label: 'Secondary Button',
    variant: 'secondary',
  };