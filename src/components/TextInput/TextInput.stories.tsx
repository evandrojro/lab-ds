import { TextInput, TextInpuRootProps } from "./TextInput";
import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from "phosphor-react";

export default {
    title: 'Components/TextInpu',
    component: TextInput.Root,
    args: {
        children: (<TextInput.Input placeholder="Type your email address" />
        )
    },
    argTypes: {
        children: {
            table: {
                disabled: true,
            }
        }
    }
} as Meta<TextInpuRootProps>

export const Default: StoryObj<TextInpuRootProps> = {}

export const WithoutIcon: StoryObj<TextInpuRootProps> = {
    args: {
        children: (<TextInput.Input placeholder="e-mail address" />)
    }
}



