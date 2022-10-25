import { Spinner, SpinnerProps } from "@afrodis-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Feedback/Spinner",
  component: Spinner,
  arg: {
    size: "md",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
        options: ["sm", "md", "lg"],
      },  
    },
  }
} as Meta<SpinnerProps>;

export const Default: StoryObj<SpinnerProps> = {};
