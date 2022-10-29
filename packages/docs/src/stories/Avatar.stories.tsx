import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@afrodis-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/josmar-jr.png",
    alt: "Josmar Jr",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
