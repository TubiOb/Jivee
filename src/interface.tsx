import { ButtonProps as CBProps,} from "@chakra-ui/react";

export interface DefaultbuttonProps extends CBProps {
    width: string [];
    bg: string;
    color: string;
    shadow?: string;
    children: string;
    // onClick: React.MouseEventHandler<HTMLButtonElement> | (() => void) | undefined;
    onClick?: () => void;
    borderWidth?: string | number;
    borderColor?: string;
    fontSize?: string [];
    className?: string;
    leftIcon?: any;
    rightIcon?: any;
    setupStep?: any;
    setSetupStep?: any;
}

export interface InputProps {
    name: string;
    id?: string | number;
    ref?: React.Ref<HTMLInputElement>;
    placeholder?: string;
    value: string;
    color?: string | undefined;
    type?: string;
    error?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.SyntheticEvent) => void;
    onFocus?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    isDisabled?: boolean;
    width?: string;
    height? : string;
    fontWeight?: string;
    errorColor?: string;
    fontSize?: string;
    bgColor?: string;
    className?: string;
    borderWidth?: string | number;
    borderColor?: string;
    shadow?: string;
    touched?: boolean;
    focusBorderColor?: string;
    maxLength?: number;
    showAttachIcon?: boolean;
    emojiPickerTop?: string[];
    emojiPickerLeft?: string[];
    emojiPickerRight?: string[];
    emojiPickerBottom?:  string[];
    emojiPickerResponsive?: boolean;
}

export interface ToastProps {
    // showToast: boolean;
    // position: string;
    // visibleToasts: number;
    // dir: string;
    // theme: string;
    // invert: boolean;
    // expand: boolean;
    // richColors: undefined;
    // closeButton: undefined;
}