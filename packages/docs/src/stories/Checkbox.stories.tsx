import { Box, Checkbox, CheckboxProps, Text } from "@afrodis-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {
    name: "term",
    id: "term",
  },
  decorators: [
    (Story) => (
      <Box style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {Story()}
        <Text size="sm" as="label" htmlFor="term" style={{ cursor: "pointer" }}>
          Accept terms of user
        </Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
