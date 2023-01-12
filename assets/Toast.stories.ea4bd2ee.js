var c=Object.defineProperty;var s=(o,t)=>c(o,"name",{value:t,configurable:!0});import{k as a,l as T,a as d,m as u,n as h,o as m,T as g,p as A,X as f}from"./index.9c9520dd.js";import{a as p,j as n,F as C}from"./jsx-runtime.4f7d041f.js";import{ap as r}from"./iframe.8f813774.js";import"./index.f2f7423c.js";import"./index.2999316c.js";import"./polished.esm.bf8dffe3.js";const S={parameters:{storySource:{source:`import { useArgs } from "@storybook/client-api";
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
`,locationsMap:{default:{startLoc:{col:36,line:81},endLoc:{col:1,line:89},startBody:{col:36,line:81},endBody:{col:1,line:89}},"with-title":{startLoc:{col:45,line:91},endLoc:{col:1,line:99},startBody:{col:45,line:91},endBody:{col:1,line:99}},"with-action":{startLoc:{col:46,line:101},endLoc:{col:1,line:109},startBody:{col:46,line:101},endBody:{col:1,line:109}}}}},title:"Overlay/Toast",component:a,argTypes:{open:{control:"boolean"},state:{options:["default","success","danger","warning"],control:{type:"inline-radio"}}},args:{open:!1,state:"default"},decorators:[o=>{const[,t]=r();return p(T,{children:[n(d,{onClick:()=>t({open:!0}),children:"Open"}),o(),n(u,{})]})}]},i=s(({withAction:o=!1,withTitle:t=!1})=>p(C,{children:[t&&n(h,{children:"This is Title"}),n(m,{children:n(g,{children:"Lorem ipsum dolor casiudis lale paris"})}),o&&n(A,{asChild:!0,altText:"Goto schedule to undo",children:n("button",{children:n(f,{weight:"bold"})})})]}),"BaseComponent"),y=s(({children:o,...t})=>{const[,e]=r();return n(a,{...t,onOpenChange:l=>e({open:l}),children:n(i,{})})},"Template"),w=s(o=>{const[,t]=r();return n(a,{...o,onOpenChange:e=>t({open:e}),children:n(i,{withTitle:!0})})},"TemplateWithTitle"),B=s(o=>{const[,t]=r();return n(a,{...o,onOpenChange:e=>t({open:e}),children:n(i,{withAction:!0})})},"TemplateWithAction"),k=y.bind({}),j=w.bind({}),M=B.bind({}),V=["Default","WithTitle","WithAction"];export{k as Default,M as WithAction,j as WithTitle,V as __namedExportsOrder,S as default};
//# sourceMappingURL=Toast.stories.ea4bd2ee.js.map
