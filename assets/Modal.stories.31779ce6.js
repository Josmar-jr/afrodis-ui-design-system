var d=Object.defineProperty;var o=(i,t)=>d(i,"name",{value:t,configurable:!0});import{M as l,b as m,a as p,c as s,d as u,T as a,e as q}from"./index.1cfb9513.js";import{a as n,j as e}from"./jsx-runtime.431fbd6e.js";import{ap as f}from"./iframe.d3eab509.js";import"./index.23fc5aee.js";import"./index.90ee12e6.js";import"./polished.esm.bf8dffe3.js";const A={parameters:{storySource:{source:`import { useArgs } from "@storybook/client-api";
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
`,locationsMap:{modal:{startLoc:{col:36,line:49},endLoc:{col:1,line:72},startBody:{col:36,line:49},endBody:{col:1,line:72}}}}},title:"Overlay/Modal/Modal",component:l,argsTypes:{open:{control:"boolean"},overlay:{control:"boolean"},onOpenChange:{control:!1},defaultOpen:{control:!1},closeButton:{control:"boolean"}},args:{open:!1,overlay:!0},decorators:[i=>{const[t,r]=f();return n(l,{...t,onOpenChange:c=>r({open:c}),children:[e(m,{asChild:!0,children:e(p,{children:"Open Modal"})}),i()]})}]},g=o(i=>e(s,{children:n(u,{children:[e(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"}),e(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"})]})}),"Template"),M=o(i=>n(s,{children:[e(q,{...i}),n(u,{children:[e(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"}),e(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"})]})]}),"TemplateWithTitle"),W={args:{children:e(s,{children:n(u,{children:[e(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"}),e(a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"})]})}),closeButton:!0},argTypes:{children:{control:"text"},closeButton:{control:"boolean"}}},B=g.bind({}),O=M.bind({args:{children:"Modal Title",closeButton:!0},argTypes:{onOpenChange:{control:!1},closeButton:{control:"boolean"}}}),L=["WithIcon","Modal","ModalWithTitle"];export{B as Modal,O as ModalWithTitle,W as WithIcon,L as __namedExportsOrder,A as default};
//# sourceMappingURL=Modal.stories.31779ce6.js.map
