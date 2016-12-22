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

  a,button,input{
    -webkit-tap-highlight-color:rgba(0,0,0,0); /* 1.去除android a/button/input标签被点击时产生的边框 2.去除ios a标签被点击时产生的半透明灰色背景 */
    text-decoration: none;
  }

  body.fontLoaded {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  @media only screen and (max-width: 320px){html{font-size: 9px;} }
  @media only screen and (min-width: 320px) and (max-width: 352px){html{font-size: 10px;} }
  @media only screen and (min-width: 352px) and (max-width: 384px){html{font-size: 16px;} }
  @media only screen and (min-width: 384px) and (max-width: 416px){html{font-size: 12px;} }
  @media only screen and (min-width: 416px) and (max-width: 448px){html{font-size: 13px;} }
  @media only screen and (min-width: 448px) and (max-width: 480px){html{font-size: 14px;} }
  @media only screen and (min-width: 480px) and (max-width: 512px){html{font-size: 15px;} }
  @media only screen and (min-width: 512px) and (max-width: 544px){html{font-size: 16px;} }
  @media only screen and (min-width: 544px) and (max-width: 576px){html{font-size: 17px;} }
  @media only screen and (min-width: 576px) and (max-width: 608px){html{font-size: 18px;} }
  @media only screen and (min-width: 608px) and (max-width: 640px){html{font-size: 19px;} }
  @media only screen and (min-width: 640px){html{font-size: 20px;} }
`;
