import './arcadebutton.css';
import React, { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import arcadeButtonVariants from './arcadeButtonVariants';
import classNames from 'classnames';
import { useCardTextContext } from '../../hooks/CardTextContext';


interface ArcadeButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof arcadeButtonVariants> {
      onClickFunction?: keyof ReturnType<typeof useCardTextContext>;
}


const ArcadeBtn: FC<ArcadeButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, size, variant, onClickFunction, ...props }) => {
  const contextFunctions = useCardTextContext();
  const handleClick = () => {
    if (onClickFunction && contextFunctions[onClickFunction]) {
      contextFunctions[onClickFunction]();
    }
  };
  return (
    <>
      <button className={classNames(arcadeButtonVariants({variant, size, className}))}
      onClick={handleClick}
      {...props}
      />
    </>
  )
}

export { ArcadeBtn, arcadeButtonVariants }

