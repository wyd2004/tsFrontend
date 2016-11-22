/* global COLOR_3 COLOR_4 */
import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${COLOR_3};
  }

  a,button,input{-webkit-tap-highlight-color:rgba(0,0,0,0);}/* 1.去除android a/button/input标签被点击时产生的边框 2.去除ios a标签被点击时产生的半透明灰色背景 */

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${COLOR_4};
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
