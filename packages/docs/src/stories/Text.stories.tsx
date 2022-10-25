import { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@afrodis-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi!Detraxit consequat et quo num tendi nada.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Quem num gosta di mim que vai caçá sua turmis!",
  },
  argTypes: {
    size: {
      options: [
        "$xxs",
        "$xs",
        "$sm",
        "$md",
        "$lg",
        "$xl",
        "$2xl",
        "$4xl",
        "$5xl",
        "$6xl",
        "$7xl",
        "$8xl",
        "$9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "As Strong text",
    as: "strong",
  },
};
