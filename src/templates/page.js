import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageHero from '../components/PageHero'
// import PageTitle from '../components/PageTitle'
// import PageSubTitle from '../components/PageSubTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import styled from '@emotion/styled'


const PageTemplate = ({ data }) => {
  const { title,
    subTitle,
    metaDescription,
    heroImage,
    body } = data.contentfulPage

    let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  const PageContainer = styled(Container)`
  z-index: 2;
  position: absolute;
  `

  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
        image={ogImage}
      />
        <PageHero title={title} subTitle={subTitle} image={heroImage} height={'50vh'} />
        <PageContainer>
        {/* <PageTitle>{title}</PageTitle>
        <PageSubTitle>{subTitle}</PageSubTitle> */}
        <PageBody body={body} />
        </PageContainer>
     
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      subTitle
      slug
      metaDescription {
        internal {
          content
        }
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
