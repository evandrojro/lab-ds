import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Hello Wordl',
        size:'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
        children: 'Small'
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
        children: (<p>test with paragraph tag</p>),
    },
    argTypes: {
        children: {
            table: {
                disabled: true
            }
        },
        asChild:{
            table: {
                disabled: true
            }
        }

    }
}

