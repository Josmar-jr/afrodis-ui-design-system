var d=Object.defineProperty;var t=(e,o)=>d(e,"name",{value:o,configurable:!0});import{M as i,b as c,a as l,c as m,e as p,d as M,T as s,f as g,g as f}from"./index.9c9520dd.js";import{a,j as n}from"./jsx-runtime.4f7d041f.js";import{ap as h}from"./iframe.8f813774.js";import"./index.f2f7423c.js";import"./index.2999316c.js";import"./polished.esm.bf8dffe3.js";const B={parameters:{storySource:{source:`import { useArgs } from "@storybook/client-api";
import { Meta, Story, StoryObj } from "@storybook/react";

import {
  Button,
  Heading,
  Modal as ModalComponent,
  ModalContent,
  ModalActions,
  ModalHeader,
  ModalHeaderProps,
  ModalProps,
  ModalTitle,
  ModalTrigger,
  ModalWrapper,
  Text,
  ModalClose,
} from "@afrodis-ui/react";

export default {
  title: "Overlay/Modal",
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
    children: "Modal Title",
    closeButton: true,
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

const TemplateWithActions: Story<ModalHeaderProps> = (args) => {
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

      <ModalActions align="center">
        <ModalClose asChild>
          <Button>Close</Button>
        </ModalClose>
      </ModalActions>
    </ModalWrapper>
  );
};

export const ModalWithActions = TemplateWithActions.bind({});
`,locationsMap:{"modal-with-actions":{startLoc:{col:53,line:53},endLoc:{col:1,line:84},startBody:{col:53,line:53},endBody:{col:1,line:84}}}}},title:"Overlay/Modal",component:i,argsTypes:{open:{control:"boolean"},overlay:{control:"boolean"},onOpenChange:{control:!1},defaultOpen:{control:!1},closeButton:{control:"boolean"}},args:{open:!1,overlay:!0,children:"Modal Title",closeButton:!0},decorators:[e=>{const[o,r]=h();return a(i,{...o,onOpenChange:u=>r({open:u}),children:[n(c,{asChild:!0,children:n(l,{children:"Open Modal"})}),e()]})}]},b=t(e=>a(m,{children:[n(p,{...e}),a(M,{children:[n(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"}),n(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"})]}),n(g,{align:"center",children:n(f,{asChild:!0,children:n(l,{children:"Close"})})})]}),"TemplateWithActions"),O=b.bind({}),W=["ModalWithActions"];export{O as ModalWithActions,W as __namedExportsOrder,B as default};
//# sourceMappingURL=ModalActions.stories.1b1a7d47.js.map
