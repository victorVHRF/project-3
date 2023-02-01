import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, exercitationem, beatae ea, illo iste corrupti vero nobis consequatur veritatis obcaecati accusamus. Repellendus fugit inventore, aspernatur autem sapiente incidunt delectus quia.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  )
}