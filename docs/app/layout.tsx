import { getEnhancedPageMap } from '@components/get-page-map'
import { NextraLogo, VercelLogo } from '@components/icons'
import { ChatButton } from '@components/inkeep-chat-button'
import cn from 'clsx'
import type { Metadata } from 'next'
import NextImage from 'next/image'
import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { Anchor, Banner, Head } from 'nextra/components'
import type { FC } from 'react'
import inkeep from './showcase/_logos/inkeep.png'
import './globals.css'

export const metadata: Metadata = {
  description: 'Participa en el correcto desarrollo de la IA en Andalucia.',
  metadataBase: new URL('https://regulacionia.es'),
  keywords: [
    'IA',
    'Regulacion IA',
    'IA Andalucia',
    'RIA Andalucia',
    'Inteligencia Artificial',
    'Legislacion IA',
    'Asociacion IA Andalucia'
  ],
  generator: 'Next.js',
  applicationName: 'Nextra',
  appleWebApp: {
    title: 'RegulacionIA'
  },
  title: {
    default: 'Por una IA ética, responsable y al servicio del bienestar global.',
    template: '%s | RegulacionIA'
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'RegulacionIA',
    locale: 'es_ES',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://nextra.site'
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './'
  }
}

const banner = (
  <Banner>
    🎉 Preparándolo todo nos ponemos en marcha en 2026!!!. 🎉{' '}
  </Banner>
)
const navbar = (
  <Navbar
    logo={
      <NextraLogo
        height="20"
        className={cn(
          'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
          '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
          'hover:[mask-position:100%]'
        )}
      />
    }
    projectLink="https://github.com/shuding/nextra"
  />
)
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <a
      className="x:focus-visible:nextra-focus flex items-center gap-1"
      target="_blank"
      rel="noreferrer"
      title="vercel.com homepage"
      href="https://vercel.com?utm_source=nextra.site"
    >
      Alojados en
      <VercelLogo height="20" />
    </a>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} RegulacionIA (RIA).
    </p>
  </Footer>
)

const RootLayout: FC<LayoutProps<'/'>> = async ({ children }) => {
  const pageMap = await getEnhancedPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <ChatButton />
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          toc={{
            extraContent: (
              <>
                <b className="mt-2 text-xs">Sponsored by:</b>
                <Anchor href="https://inkeep.com?utm_source=nextra.site&utm_campaign=nextra&utm_content=sidebarLink">
                  <NextImage
                    src={inkeep}
                    title="AI Agents that get real work done"
                    alt="AI Agents that get real work done"
                    className="nextra-border rounded-sm border"
                  />
                </Anchor>
              </>
            )
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
