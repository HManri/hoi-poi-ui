export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'inline-block',
        padding: '5px 20px',
        textAlign: 'center',
        lineHeight: 0,
        borderRadius: '100px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer !important',
        '&:active': {
            ...theme.effects.buttonActive,
        },
        '&$fullWidth': {
            width: '100%',
        },
        '&$disabled': {
            opacity: 0.5,
            cursor: 'not-allowed !important',
            '&:active': {
                boxShadow: 'none',
            },
            '& *': {
                cursor: 'not-allowed',
            },
        },
        '& *': {
            cursor: 'pointer',
        },
    },
    Text: {
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
        fontWeight: 500,
        transition: 'opacity .2s ease-in-out',
        ...theme.typography.button,
        lineHeight: '20px',
    },
    labelLoading: {
        top: 1,
        position: 'relative',
        '& $Text': {
            opacity: 0,
        },
        '& $loader': {
            opacity: 1,
        },
    },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        transition: 'opacity .2s ease-in-out',
    },
    // Types
    outlined: {
        padding: '4px 20px',
        '&$primary': {
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.primary}`,
            transition: `color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .1s ease-in-out`,
            '&$disabled': {
                '&:hover': {
                    backgroundColor: 'transparent',
                    '& $Text': {
                        color: theme.colors.primary,
                    },
                },
            },
            '& $Text': {
                color: theme.colors.primary,
            },
            '&:hover': {
                backgroundColor: theme.colors.primarySoft,
                '& $Text': {
                    color: theme.colors.text.primary,
                },
            },
        },
        '&$danger': {
            background: 'transparent',
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.red}`,
            transition: `color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .1s ease-in-out`,
            '& $Text': {
                color: theme.colors.red,
            },
            '&:hover': {
                backgroundColor: theme.colors.red,
                '& $Text': {
                    color: theme.colors.text.white,
                },
            },
        },
        '&$small': {
            padding: '0 20px',
            '& $Text': {
                lineHeight: '18px',
            },
        },
        '&$big': {
            padding: '9px 20px',
        },
    },
    squared: {
        borderRadius: 2,
        padding: '4px 10px',
        '&$white': {
            backgroundColor: 'transparent',
            transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
            '&$disabled': {
                '&:hover': {
                    backgroundColor: 'transparent !important',
                },
            },
            '& $Text': {
                color: theme.colors.text.default,
            },
            '&:hover': {
                backgroundColor: theme.colors.greyLight,
            },
        },
        '&$primary': {
            backgroundColor: theme.colors.primary,
            '&$disabled': {
                '&:hover': {
                    backgroundColor: `${theme.colors.primary} !important`,
                },
            },
            '&:hover': {
                backgroundColor: theme.colors.primarySoft,
            },
            '& $Text': {
                color: theme.colors.text.white,
            },
        },
        '&$danger': {
            backgroundColor: theme.colors.red,
            '&$disabled': {
                '&:hover': {
                    backgroundColor: `${theme.colors.red} !important`,
                },
            },
            '&:hover': {
                backgroundColor: theme.colors.redsoft,
            },
            '& $Text': {
                color: theme.colors.text.white,
            },
        },
        '&$small': {
            padding: '0 9px',
        },
        '&$big': {
            padding: '9px 9px',
        },
    },
    'squared-outlined': {
        borderRadius: 2,
        padding: '4px 10px',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.colors.placeholders}`,
        transition: `border-color .2s ease-in-out`,
        '&:hover': {
            border: `1px solid ${theme.colors.placeholdersHover}`,
            backgroundColor: 'transparent !important',
        },
        '&$disabled': {
            '&:hover': {
                border: `1px solid ${theme.colors.placeholders}`,
                backgroundColor: 'transparent',
            },
        },
        '&$white': {
            backgroundColor: 'transparent',
            '&$disabled': {
                '&:hover': {
                    backgroundColor: 'transparent',
                },
            },
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        '&$primary': {
            backgroundColor: 'transparent',
            '&$disabled': {
                '&:hover': {
                    backgroundColor: 'transparent',
                    '& $Text': {
                        color: theme.colors.primary,
                    },
                },
            },
            '& $Text': {
                color: theme.colors.primary,
            },
        },
        '&$danger': {
            background: 'transparent',
            backgroundColor: 'transparent',
            '& $Text': {
                color: theme.colors.red,
            },
        },
        '&$small': {
            padding: '0 9px',
        },
        '&$big': {
            padding: '9px 9px',
        },
    },
    filled: {},
    //Colors
    white: {
        backgroundColor: 'transparent',
        transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
        '& $Text': {
            color: theme.colors.text.default,
        },
        '&$disabled': {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        '&:hover': {
            backgroundColor: theme.colors.greyLight,
        },
    },
    primary: {
        backgroundColor: theme.colors.primary,
        transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
        '& $Text': {
            color: theme.colors.text.primary,
        },
        '&$disabled': {
            '&:hover': {
                backgroundColor: theme.colors.primary,
            },
        },
        '&:hover': {
            backgroundColor: theme.colors.primarySoft,
        },
    },
    danger: {
        backgroundColor: theme.colors.red,
        transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
        '& $Text': {
            color: theme.colors.text.white,
        },
        '&$disabled': {
            '&:hover': {
                backgroundColor: theme.colors.red,
            },
        },
        '&:hover': {
            backgroundColor: theme.colors.redSoft,
        },
    },
    grey: {
        backgroundColor: theme.colors.tableHover,
        transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
        '& $Text': {
            color: theme.colors.text.default,
        },
        '&$disabled': {
            '&:hover': {
                backgroundColor: theme.colors.tableHover,
            },
        },
        '&:hover': {
            backgroundColor: theme.colors.tableHeader,
        },
    },
    // Sizes
    small: {
        padding: '0px 20px',
    },
    big: {
        padding: '10px 20px',
    },
    // States
    disabled: {},
    fullWidth: {},
});
