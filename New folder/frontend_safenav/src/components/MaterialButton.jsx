import React from 'react';
import './MaterialButton.css';

/**
 * Props:
 * - variant: 'rounded' | 'radius' | 'square' | 'pill' | 'gradient' | 'icon' (for different styles)
 * - color: 'blue' | 'pink' | 'gray' | 'green' | 'red' | 'outline' (for color theme)
 * - disabled: boolean
 * - children: button text or icon
 * - onClick: function
 * - type: button type
 * - className: extra classes
 */
const MaterialButton = ({
  variant = 'rounded',
  color = 'blue',
  disabled = false,
  children,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) => {
  let base = 'mat-btn';
  base += ` mat-btn-${variant}`;
  base += ` mat-btn-${color}`;
  if (disabled) base += ' mat-btn-disabled';
  if (className) base += ` ${className}`;

  return (
    <button
      className={base}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MaterialButton;
