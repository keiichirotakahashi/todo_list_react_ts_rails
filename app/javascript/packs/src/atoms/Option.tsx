import React, { FC } from 'react';

interface OptionProps {
  children: string;
  value: string;
}

export const Option: FC<OptionProps> = props => {
  const { children, value } = props;

  return (
    <option value={value}>
      {children}
    </option>
  );
};
