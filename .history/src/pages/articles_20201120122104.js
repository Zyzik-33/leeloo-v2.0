import React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
import { graphql } from 'gatsby';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import PageInfo from '../components/PageInfo/PageInfo';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const ArticlesPage = ({ data }) => {
  const {allMdx: {nodes}} = data;
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
      {nodes.map(({excerpt, frontmatter: {title, slug, author, featuredImage}}) => (
        <ArticlePreview key={title} title={title} image={featuredImage.childImageSharp.fluid} slug={slugify} />
      ))}
      </ArticlesWrapper>
    </>
  );
}

export const query = graphql`
  {
    allDatoCmsArticles {
      nodes {
        title
        author
        featuredImage {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
    }
  }
`;

export default ArticlesPage;
