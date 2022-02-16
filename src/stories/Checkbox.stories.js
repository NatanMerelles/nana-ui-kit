import React from 'react';

import { Checkbox } from '../components';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};