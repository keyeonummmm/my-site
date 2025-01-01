import localFont from 'next/font/local'

export const helvetica = localFont({
  src: [
    {
      path: '../../fonts/Helvetica.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Helvetica-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica'
})
