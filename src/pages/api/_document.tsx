import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
//import { GA_TRACKING_ID, GOOGLE_ANALYTICS_TRACKING_ID } from '../services/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Epilogue:wght@300;400;600;700&display=swap" rel="stylesheet" />
                
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TRACKING_ID}`} /> */}
                    {/* <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                            
                                gtag('config', '${GOOGLE_ANALYTICS_TRACKING_ID}');
                            `,
                        }}
                    /> */}

                    {/* Global Site Tag (gtag.js) - Google Ads */}
                    {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                            
                                gtag('config', '${GA_TRACKING_ID}');
                            `,
                        }}
                    /> */}

                    <meta name="robots" content="index, follow"></meta>

                    <meta name="description" content="Fornecemos o meio financeiro para você adquirir imóveis, veículos, investimentos e alavancar seu patrimônio."/>
                    <link rel="icon" type="image/x-icon" href="./icon.svg"/>

                    <meta name="facebook-domain-verification" content="g8yp6iz97nsgjl1dxn46e34gxaot0s"></meta>
                    <meta name="google-site-verification" content="Q5dGY-imD4ur2aZOKlLTgMCEIefxpB2AgWR36Ne2H2A"></meta>

                    <meta name="category" content="Consórcio" />
                    <link rel="index" title="Lance Consórcio" href="https://lanceconsorcio.com.br/"/>
                    <link rel="logo" type="image/svg" href="./logo.svg"></link>
                    <link rel="sitemap" type="application/xml" href="https://lanceconsorcio.com.br/sitemap.xml"></link>

                    {/* <meta name="url" content="https://lanceconsorcio.com.br/"></meta> */}
                    {/* <meta property="og:url" content="https://old.lanceconsorcio.com.br/blog"></meta> */}

                    <meta property="og:site_name" content="Lance Consórcio"></meta>
                    <meta property="og:locale" content="pt_BR"></meta>
                    <meta property="og:title" content="Lance Consórcio - Plano de imóveis, veículos e investimentos"></meta>
                    <meta property="og:description" content="Saiba como aproveitar mais do seu consórcio, construir seu patrimônio, adquirir bens, obter rendimentos, investir e todas as possibilidades!"></meta>

                    <meta property="og:image" content="./images/card.jpg"></meta>
                    <meta property="og:image:alt" content="Lance Consórcio - Plano de imóveis, veículos e investimentos"></meta>
                    <meta property="og:app_id" content="ns67765jnmz8"></meta>
                    <meta property="og:type" content="website"></meta>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument