export default (theme) => ({
    root: {
        ...theme.typography.smallText,
        backgroundColor: theme.colors.secondaryGrey,
        color: theme.colors.text.greySoft,

        borderRadius: '3px',

        lineHeight: '20px',

        display: 'inline-block',
        verticalAlign: 'middle',

        padding: '0',
        marginRight: '3px',
        height: '20px',
    },

    wrapper: {
        display: 'flex',
        alignItems: 'center',
    },

    Text: {
        color: theme.colors.text.greySoft,

        fontSize: '13px',
        lineHeight: '20px',
        letterSpacing: '0.5px',

        display: 'flex',
        padding: '0 5px',
    },

    shrinked: {
        color: theme.colors.text.greySoft,

        fontSize: '11px',
        lineHeight: '20px',
        letterSpacing: '0.5px',

        display: 'inline',
        textAlign: 'center',

        height: '20px',
        width: '20px',
    },

    close: {
        cursor: 'pointer',
        margin: '0 5px',
    },

    picture: {
        height: '20px',
        width: '20px',

        borderTopLeftRadius: '3px',
        borderBottomLeftRadius: '3px',
    },

    shrinkedPicture: {
        borderRadius: '3px',

        height: '20px',
        width: '20px',
    },
});
