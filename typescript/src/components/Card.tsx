import React, { FC, useState } from "react";

export enum CardVariant {
    outline = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string,
    height?: string,
    variant: CardVariant,
    onClick: (num: number) => void
}

export const Card: FC<CardProps> =
    ({
        width,
        height,
        variant,
        onClick,
        children
    }) => {
        const [state, setState] = useState(0)

        return (
            <div style={{
                width, height,
                border: variant === CardVariant.outline ? '1px solid grey' : 'none',
                background: variant === CardVariant.primary ? 'lightgrey' : ''
            }}
                onClick={()=>onClick(state)}
            >
                {children}
            </div>
        )
    }