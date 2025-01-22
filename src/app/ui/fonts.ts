import localFont from 'next/font/local'

export const sourceSerif = localFont({
  src: [
    {
      path: '../../fonts/SourceSerif4-Regular.otf.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/SourceSerif4-It.otf.woff2', 
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-source-serif'
})

export const officeTimesRound = localFont({
  src: '../../fonts/OfficeTimesRound-RoundMono.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-office-times-round'
})