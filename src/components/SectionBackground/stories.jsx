import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, exercitationem, beatae ea, illo iste corrupti vero nobis consequatur veritatis obcaecati accusamus. Repellendus fugit inventore, aspernatur autem sapiente incidunt delectus quia.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  )
}