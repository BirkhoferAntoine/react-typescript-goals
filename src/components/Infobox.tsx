import {type FC, type PropsWithChildren} from "react";

type HintBoxType = {
    mode: 'hint';
};

type WarningBoxType = {
    mode: 'warning',
    severity: 'low' | 'medium' | 'high';
}

type InfoboxType = PropsWithChildren<WarningBoxType | HintBoxType>;

const Infobox: FC<InfoboxType> = (props) => {
    const {children, mode} = props;

    if (mode === 'hint') {
        return (
            <aside className={'infobox infobox-hint'}>
                <p>{children}</p>
            </aside>
        );
    }

    const {severity} = props;

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
};

export default Infobox;