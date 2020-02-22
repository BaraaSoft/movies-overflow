import { css } from 'styled-components';

/** For Responsie Design **/
const sizes = {
    xxxl: 1300,
    xxl: 1200,
    xl: 1055,
    md: 760,
    sm: 480
}
export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
    return acc
}, {})