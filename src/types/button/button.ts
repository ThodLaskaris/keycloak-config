import { ReactNode } from "react";

export interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
    size?: 'small' | 'default' | 'large';
    color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark' | 'default';
    variant?: 'contained' | 'outlined' | 'text';
    style?: React.CSSProperties;
    disabled?: boolean;
}