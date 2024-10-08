import React, { FC, ReactNode } from 'react'
import cl from './IncorrectFlag.module.scss';

export const IncorrectFlag: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <p className={cl['incorrect-flag']}>{children}</p>
    )
}
