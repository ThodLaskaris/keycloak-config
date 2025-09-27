import { IonButton } from "@ionic/react";
import { ButtonProps } from "../../types/button/button.ts";

export const Button: React.FC<ButtonProps> = ({ onClick, children, size, color, variant , style, disabled }) => {
    return (
         <IonButton size={size} 
         color={color} 
         onClick={onClick}
         style={style}
         disabled={disabled}>
            {children}
        </IonButton>
    );
}