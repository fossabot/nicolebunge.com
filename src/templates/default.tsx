import { graphql } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

export interface TemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
}

const Template: React.FC<TemplateProps> = (props) => {
  const {
    data: {
      markdownRemark: { frontmatter, html },
    },
  } = props;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Section>
        <Grid>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default Template;
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
