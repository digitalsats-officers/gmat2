import React from 'react';

import { App } from './Three';

export default {
  title: 'Example/Three',
  component: App,
};

const Template = (args) => <App {...args} />;

export const Sample = Template.bind({});
Sample.args = {
};

