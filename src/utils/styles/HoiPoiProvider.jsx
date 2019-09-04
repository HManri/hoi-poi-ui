import React from 'react';
import { ThemeProvider, JssProvider } from 'react-jss';

import jss from './jss';
import defaultTheme from './defaultTheme';

const CLASS_NAME_PREFIX = 'HoiPoi__';
let providerCounter = 0;
const customCreateGenerateId = () => {
    let counter = 0;
    return (rule, sheet) => {
        return `${CLASS_NAME_PREFIX}${sheet.options.name}__${
            rule.key
        }-${providerCounter}-${counter++}`;
    };
};

export default React.memo(({ children, theme = defaultTheme, jssProvider = {} }) => {
    const generateId = customCreateGenerateId();
    providerCounter++;

    return (
        <ThemeProvider theme={theme}>
            <JssProvider
                jss={jss}
                generateId={generateId}
                classNamePrefix={CLASS_NAME_PREFIX}
                {...jssProvider}
            >
                {children}
            </JssProvider>
        </ThemeProvider>
    );
});
