import breakpoints from '../breakpoints';

const justDoItTheme = {
    primaryColor: 'rgba(183, 86, 82, 1)',
    secondaryColor: 'rgba(205, 172, 161, 1)',
    tertiaryColor: 'rgba(63, 0, 150, 1)',
    errorColor: 'rgba(211, 47, 47, 1)',
    warningColor: 'rgba(255, 160, 0, 1)',
    infoColor: 'rgba(25, 118, 210, 1)',
    successColor: 'rgba(67, 160, 71, 1)',
    text: {
        primaryColor: 'rgba(59, 59, 59, 1)',
        secondaryColor: 'rgba(112, 112, 112, 1)',
        tertiaryColor: 'rgba(158, 158, 158, 1)',
        quaternary: 'rgba(191, 191, 191, 1)',
        disabledColor: 'rgba(199, 199, 199, 1)'
    },
    border: {
        color: 'rgba(224, 224, 224, 1)',
        radius: '0.4rem'
    },
    spacing: {
        marginButtonGroup: '1.6rem',
        paddingInputFile: '.8rem',
        paddingButtonNormal: '.8rem',
        paddingButtonSmall: '.4rem',
        spaceSmall: '1.2rem',
        spaceMedium: '1.6rem',
        spaceLarge: '2.4rem'
    },
    duration: {
        durationFast: '0.15s',
        durationNormal: '0.3s',
        durationSlow: '0.4s'
    },
    typography: {
        h1: {
            fontWeight: 400,
            fontSize: '4.2rem',
            lineHeight: 1.7,
            letterSpacing: 0
        },
        h2: {
            fontWeight: 500,
            fontSize: '3.4rem',
            lineHeight: 1.2,
            letterSpacing: '0.015rem'
        },
        h3: {
            fontWeight: 500,
            fontSize: '3rem',
            lineHeight: 1.2,
            letterSpacing: '0.015rem'
        },
        body1: {
            fontWeight: 400,
            fontSize: '1.8rem',
            lineHeight: 1.4,
            letterSpacing: '0.015rem'
        },
        body2: {
            fontWeight: 400,
            fontSize: '2.2rem',
            lineHeight: 1.6,
            letterSpacing: '0.01rem'
        },
        button: {
            fontWeight: 500,
            fontSize: '1.6rem',
            lineHeight: 1.16,
            letterSpacing: '0.125rem'
        }
    },
    space: [
        '.4rem',
        '.8rem',
        '1rem',
        '1.6rem',
        '2rem',
        '3rem',
        '4rem',
        '4.8rem',
        '6rem',
        '8rem',
        '12rem',
        '16rem',
        '24rem'
    ],
    breakpoints: breakpoints
};
export default justDoItTheme;
