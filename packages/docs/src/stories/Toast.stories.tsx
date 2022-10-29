import { useArgs } from "@storybook/client-api";
import type { Meta, Story } from "@storybook/react";
import {
  Toast as ToastComponent,
  ToastProps,
  Text,
  ToastWrapper,
  ToastDescription,
  Button,
  ToastViewport,
  ToastAction,
  ToastTitle,
} from "@afrodis-ui/react";
import { X } from "phosphor-react";
import { ReactNode } from "react";

export default {
  title: "Overlay/Toast",
  component: ToastComponent,
  argTypes: {
    open: { control: "boolean" },
    state: {
      options: ["default", "success", "danger", "warning"],
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    open: false,
    state: "default",
  },
  decorators: [
    (Story) => {
      const [, updateArgs] = useArgs();

      return (
        <ToastWrapper>
          <Button onClick={() => updateArgs({ open: true })}>Open</Button>

          {Story()}

          <ToastViewport />
        </ToastWrapper>
      );
    },
  ],
} as Meta<ToastProps>;

interface BaseTemplateProps {
  args: ToastProps;
  children: ReactNode;
}

interface BaseComponentProps {
  withTitle?: boolean;
  withAction?: boolean;
}

const BaseComponent = ({
  withAction = false,
  withTitle = false,
}: BaseComponentProps) => {
  return (
    <>
      {withTitle && <ToastTitle>This is Title</ToastTitle>}
      <ToastDescription>
        <Text>Lorem ipsum dolor casiudis lale paris</Text>
      </ToastDescription>
      {withAction && (
        <ToastAction asChild altText="Goto schedule to undo">
          <button>
            <X weight="bold" />
          </button>
        </ToastAction>
      )}
    </>
  );
};

const Template: Story<ToastProps> = ({children, ...args}) => {
  const [, updateArgs] = useArgs();

  return (
    <ToastComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      {<BaseComponent />}
    </ToastComponent>
  );
};

const TemplateWithTitle: Story<ToastProps> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <ToastComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <BaseComponent withTitle />
    </ToastComponent>
  );
};

const TemplateWithAction: Story<ToastProps> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <ToastComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <BaseComponent withAction />
    </ToastComponent>
  );
};

export const Default = Template.bind({});
export const WithTitle = TemplateWithTitle.bind({});
export const WithAction = TemplateWithAction.bind({});
