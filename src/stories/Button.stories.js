import React from 'react';

import { Button } from '../components';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Botao = Template.bind({});
Botao.args = {
  children: "Botão",
};