function Button({
    text
    ,color
    ,size = "medium"
    ,variant = "primary"
    ,disabled = false
    ,className = ""
    ,onClick = () => {}
}) {
    // 버튼 스타일 변형
    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        success: 'bg-green-600 hover:bg-green-700 text-white',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
        outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
    };

    // 버튼 크기
    const sizes = {
        small: 'py-1 px-3 text-sm',
        medium: 'py-2 px-4 text-base',
        large: 'py-3 px-6 text-lg',
    };

    // 버튼 기본 스타일
    const baseStyle = 'rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500';

    // 스타일 조합
    const buttonClasses = `
        ${baseStyle}
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.medium}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
  `;

    return (
      <button
          className={buttonClasses}
          disabled={disabled}
          onClick={onClick}
      > {text} </button>
    );
}

export default Button;