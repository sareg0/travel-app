import React from "react";
import { Timeline } from "./Timeline";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Timeline",
  component: Timeline,
} as Meta;

const Template: Story = () => <Timeline />;

export const TimelineComponent = Template.bind({});

// TimelineComponent.args = {
//   primary: true,
//   label: "Button",
// };
