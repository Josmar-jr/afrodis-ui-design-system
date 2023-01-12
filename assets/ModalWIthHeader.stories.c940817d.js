var u=Object.defineProperty;var t=(e,a)=>u(e,"name",{value:a,configurable:!0});import{M as i,b as d,a as c,c as m,e as p,d as M,T as s}from"./index.9c9520dd.js";import{a as o,j as n}from"./jsx-runtime.4f7d041f.js";import{ap as g}from"./iframe.8f813774.js";import"./index.f2f7423c.js";import"./index.2999316c.js";import"./polished.esm.bf8dffe3.js";const C={parameters:{storySource:{source:`import { useArgs } from "@storybook/client-api";
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

export const WithTitle = TemplateWithTitle.bind({});
`,locationsMap:{"with-title":{startLoc:{col:51,line:51},endLoc:{col:1,line:76},startBody:{col:51,line:51},endBody:{col:1,line:76}}}}},title:"Overlay/Modal",component:i,argsTypes:{open:{control:"boolean"},overlay:{control:"boolean"},onOpenChange:{control:!1},defaultOpen:{control:!1},closeButton:{control:"boolean"}},args:{open:!1,overlay:!0,children:"Modal Title",closeButton:!0},decorators:[e=>{const[a,r]=g();return o(i,{...a,onOpenChange:l=>r({open:l}),children:[n(d,{asChild:!0,children:n(c,{children:"Open Modal"})}),e()]})}]},f=t(e=>o(m,{children:[n(p,{...e}),o(M,{children:[n(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"}),n(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt incidunt accusantium dolorem quod nesciunt facere, sequi consectetur assumenda laboriosam libero quidem sint ipsum, fugit culpa, minus facilis vitae voluptatem expedita soluta autem labore. Ullam quos, recusandae facilis similique assumenda eum adipisci alias, incidunt rem veritatis quasi!"})]})]}),"TemplateWithTitle"),O=f.bind({}),W=["WithTitle"];export{O as WithTitle,W as __namedExportsOrder,C as default};
//# sourceMappingURL=ModalWIthHeader.stories.c940817d.js.map
