import './arcadebutton.css';
import React, { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import arcadeButtonVariants from './arcadeButtonVariants';
import classNames from 'classnames';


interface ArcadeButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof arcadeButtonVariants> {
    
}

const ArcadeBtn: FC<ArcadeButtonProps> = ({ className, size, variant, ...props }) => {
  return (
    <>
      <button className={classNames(arcadeButtonVariants({variant, size, className}))} {...props} />
    </>
  )
}

export { ArcadeBtn, arcadeButtonVariants }

