export default (theme) => ({
    root: {
        ...theme.typography.smallText,
        lineHeight: '20px',
        color: theme.colors.text.black,
        borderRadius: '3px',
        display: 'inline-block',
        padding: '0 10px',
    },
    Text: {
        lineHeight: '20px',
        fontWeight: 400,
        textTransform: 'uppercase',
    },
    // Types
    error: {
        backgroundColor: theme.colors.redLight,
        '& $Text': {
            color: theme.colors.text.red,
        },
    },
    info: {
        backgroundColor: theme.colors.greyLight,
        '& $Text': {
            color: theme.colors.text.greySoft,
        },
    },
    success: {
        backgroundColor: theme.colors.greenLight,
        '& $Text': {
            color: theme.colors.text.green,
        },
    },
});