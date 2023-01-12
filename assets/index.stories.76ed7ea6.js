var u=Object.defineProperty;var o=(n,a)=>u(n,"name",{value:a,configurable:!0});import{M as t,b as d,a as c,c as m,d as p,T as i}from"./index.9c9520dd.js";import{a as s,j as e}from"./jsx-runtime.4f7d041f.js";import{ap as g}from"./iframe.8f813774.js";import"./index.f2f7423c.js";import"./index.2999316c.js";import"./polished.esm.bf8dffe3.js";const C={parameters:{storySource:{source:`import { useArgs } from "@storybook/client-api";
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
  title: "Overlay/Modal",
  component: ModalComponent,
  argsTypes: {
    open: { control: "boolean" },
    overlay: { control: "boolean" },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
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
} as Meta<ModalProps>;

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

export const Modal = Template.bind({});
`,locationsMap:{modal:{startLoc:{col:36,line:48},endLoc:{col:1,line:71},startBody:{col:36,line:48},endBody:{col:1,line:71}}}}},title:"Overlay/Modal",component:t,argsTypes:{open:{control:"boolean"},overlay:{control:"boolean"},onOpenChange:{control:!1},defaultOpen:{control:!1}},args:{open:!1,overlay:!0},decorators:[n=>{const[a,r]=g();return s(t,{...a,onOpenChange:l=>r({open:l}),children:[e(d,{asChild:!0,children:e(c,{children:"Open Modal"})}),n()]})}]},M=o(n=>e(m,{children:s(p,{children:[e(i,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"}),e(i,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"})]})}),"Template"),h=M.bind({}),O=["Modal"];export{h as Modal,O as __namedExportsOrder,C as default};
//# sourceMappingURL=index.stories.76ed7ea6.js.map
