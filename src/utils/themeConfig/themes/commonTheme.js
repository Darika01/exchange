//@flow
const commonTheme = {
    commonColor: {
        white: 'rgba(255, 255, 255, 1)',
        black: 'rgba(0, 0, 0, 1)',
        primaryLight: 'rgba(23, 35, 56, 1)',
        primaryNormal: 'rgba(8, 21, 44, 1)',
        secondaryNormal: 'rgba(209, 61, 124, 1)',
        greyLight: 'rgba(189, 187, 193, 1)',
        greyNormal: 'rgba(124, 125, 130, 1)'
    },
    calcColor: (color: string, opacity: number) => {
        return color.replace('1)', `${opacity})`);
    }
};
export default commonTheme;
