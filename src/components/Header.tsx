import {type FC, type PropsWithChildren} from "react";

type HeaderProps = PropsWithChildren<{image: {src: string, alt: string}}>

const Header: FC<HeaderProps> = ({children, image}) => {
    return (
        <header>
            <img {...image} />
            {children}
        </header>
    );
};

export default Header;