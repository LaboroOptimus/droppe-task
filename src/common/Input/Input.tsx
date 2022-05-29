import React from "react";

interface Props {
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent, key: any) => void;
  className?: string;
  keyId: any;
  pattern?: string;
  type?: string;
}

export const Input: React.FC<Props> = ({
  value,
  placeholder,
  handleChange,
  className,
  keyId,
  type,
  pattern,
}) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleChange(e, keyId)}
      className={className}
      type={type}
      pattern={pattern}
    />
  );
};
