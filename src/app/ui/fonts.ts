import localFont from 'next/font/local'

export const timesNewRoman = localFont({
  src: [
   {
    path: '../../fonts/Times New Roman.woff2',
    weight: '400',
    style: 'normal',
   }
  ],
  variable: '--font-times-new-roman'
})
