import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@afrodis-ui/react";
import { Lock, User } from "phosphor-react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {
    disabled: false,
    error: false,
    placeholder: "Placeholder",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name",
  },
};

export const WithSuffixes: StoryObj<TextInputProps> = {
  args: {
    prefix: "@afrodis.com/",
    placeholder: "",
    suffix: ''
  },
  argTypes: {
    suffix: {
      type: "string",
    },
  },
};

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    leftIcon: <Lock weight="bold" />,
    rightIcon: null
  },
  argTypes: {
    leftIcon: {
      control: "select",
      options: ["No Icon", "Lock", "User"],
      mapping: {
        "No Icon": null,
        Lock: <Lock weight="bold" />,
        User: <User weight="bold" />,
      },
    },
    rightIcon: {
      control: "select",
      options: ["No Icon", "Lock", "User"],
      mapping: {
        "No Icon": null,
        Lock: <Lock weight="bold" />,
        User: <User weight="bold" />,
      },
    },
  },
};
