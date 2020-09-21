import React from "react";
import { Timeline, TimelineProps } from "./Timeline";
import { Story, Meta } from "@storybook/react/types-6-0";
import { data } from "../../data";
// # Timeline
// The timeline is an elements that does things
//these docs only show in the file is .mdx. How
//can I reconcile this with .tsx?

export default {
  title: "Components/Timeline",
  component: Timeline,
} as Meta;

const Template: Story<TimelineProps> = (args) => <Timeline {...args} />;

export const TimelineComponent = Template.bind({});

TimelineComponent.args = {
  events: data,
};
