import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Hello Wordl',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'ínline-radio'
            }
        }
    }
} as Meta<HeadingProps>
export const Default: StoryObj<HeadingProps> = {}
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
        children: 'small'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
        children: 'large'
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (<h1>Heading with h1 tag</h1>),
    },
    argTypes: {
        children: {
            table: {
                disabled: true
            }
        },
        asChild: {
            table: {
                disabled: true
            }
        }
    }
}

