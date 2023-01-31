import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Odit incidunt, sint iure minima corporis odio voluptate quia ab consequuntur, 
    ullam dolores nihil! Odit suscipit quibusdam excepturi maiores ipsa officiis aut!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  )
}