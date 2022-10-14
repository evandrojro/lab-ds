import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
export interface TextInpuRootProps {
    children: ReactNode;
}

export interface TextInputIconProps {
    children: ReactNode;
}

const TextInpuRoot = (props: TextInpuRootProps) => {
    <div className='flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 '>
        {props.children}
    </div>
}
TextInpuRoot.displayName = 'TextInput.Root'

const TextInpuIcon = (props: TextInputIconProps) => {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )

}
TextInpuIcon.displayName = 'TextInput.Icon'

const TextInputInput = (props: TextInputInputProps) => {
    return (
        <input className='bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400 ' {...props} />
    )
}
TextInputInput.displayName='TextInput.Input'

export const TextInput = {
    Root: TextInpuRoot,
    Input: TextInputInput,
    Icon: TextInpuIcon,
}