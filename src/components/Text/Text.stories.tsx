import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Hello Wordl'
    }
} as Meta<TextProps>
export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
        children: 'small'
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
        children: 'large'
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (<p>testando</p>),
    }
}

