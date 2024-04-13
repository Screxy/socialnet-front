import React from 'react';

type IconProps = {
    width: number;
    height: number;
    children: React.ReactNode;

}
const Icon: React.FC<IconProps> = ({width=24, height=24, children}) => {
    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`
        }} className={'inline-flex content-center items-center cursor-pointer '}>
            {children}
        </div>
    );
};

export default Icon;
