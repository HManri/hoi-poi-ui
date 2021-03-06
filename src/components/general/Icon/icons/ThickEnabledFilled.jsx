import React from 'react';

const Valid = ({ color }) => (
    <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path
                d="M9,16 C5.13,16 2,12.87 2,9 C2,5.13 5.13,2 9,2 C12.87,2 16,5.13 16,9 C16,12.87 12.87,16 9,16 L9,16 Z M7.54,10.53 L5.41,8.4 L4.35,9.46 L7.53,12.64 L13.53,6.64 L12.47,5.58 L7.54,10.53 L7.54,10.53 Z"
                id="valid-path-1"
            />
        </defs>
        <g
            id="Svg-Icons/18px-(All-icons)/valid"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <mask id="mask-2" fill="white">
                <use xlinkHref="#valid-path-1" />
            </mask>
            <use id="Mask" fill={color} xlinkHref="#valid-path-1" />
        </g>
    </svg>
);

export default React.memo(Valid);
