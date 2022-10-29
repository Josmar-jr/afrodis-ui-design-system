import { useArgs } from "@storybook/client-api";
import { Meta, Story, StoryObj } from "@storybook/react";

import {
  Button,
  Heading,
  Modal as ModalComponent,
  ModalContent,
  ModalHeader,
  ModalHeaderProps,
  ModalProps,
  ModalTitle,
  ModalTrigger,
  ModalWrapper,
  Text,
} from "@afrodis-ui/react";

export default {
  title: "Overlay/Modal/Modal",
  component: ModalComponent,
  argsTypes: {
    open: { control: "boolean" },
    overlay: { control: "boolean" },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
    closeButton: { control: "boolean" },
  },
  args: {
    open: false,
    overlay: true,
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();

      return (
        <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
          <ModalTrigger asChild>
            <Button>Open Modal</Button>
          </ModalTrigger>

          {Story()}
        </ModalComponent>
      );
    },
  ],
} as Meta<ModalProps & ModalHeaderProps>;

const Template: Story<ModalProps> = (args) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
          assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
          facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
          recusandae facilis similique assumenda eum adipisci alias, incidunt
          rem veritatis quasi!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
          assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
          facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
          recusandae facilis similique assumenda eum adipisci alias, incidunt
          rem veritatis quasi!
        </Text>
      </ModalContent>
    </ModalWrapper>
  );
};

const TemplateWithTitle: Story<ModalHeaderProps> = (args) => {
  return (
    <ModalWrapper>
      <ModalHeader {...args} />

      <ModalContent>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
          assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
          facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
          recusandae facilis similique assumenda eum adipisci alias, incidunt
          rem veritatis quasi!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
          incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
          assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
          facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
          recusandae facilis similique assumenda eum adipisci alias, incidunt
          rem veritatis quasi!
        </Text>
      </ModalContent>
    </ModalWrapper>
  );
};

export const WithIcon: StoryObj<ModalHeaderProps> = {
  args: {
    children: (
      <ModalWrapper>
        <ModalHeader  />

        <ModalContent>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
            incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
            assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
            facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
            recusandae facilis similique assumenda eum adipisci alias, incidunt
            rem veritatis quasi!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
            incidunt accusantium dolorem quod nesciunt facere, sequi consectetur
            assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus
            facilis vitae voluptatem expedita soluta autem labore. Ullam quos,
            recusandae facilis similique assumenda eum adipisci alias, incidunt
            rem veritatis quasi!
          </Text>
        </ModalContent>
      </ModalWrapper>
    ),
    closeButton: true,
  },
  argTypes: {
    children: { control: "text" },
    closeButton: { control: "boolean" },
  },
};

export const Modal = Template.bind({});
export const ModalWithTitle = TemplateWithTitle.bind({
  args: {
    children: "Modal Title",
    closeButton: true,
  },
  argTypes: {
    onOpenChange: { control: false },
    closeButton: { control: "boolean" },
  },
}) as Story<ModalHeaderProps>;
