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