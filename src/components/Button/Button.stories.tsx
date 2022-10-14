import { Button, ButtonProps } from "./Button";
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Search',
    },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

