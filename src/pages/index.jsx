import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../components/Button';
import GridColumn from '../components/GridColumn';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import GridRow from '../components/GridRow';
import Section from '../components/Section';
import SEO from '../components/SEO';
import * as routes from '../constants/routes';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Section full>
      <Grid>
        <GridRow>
          <GridColumn columnSpan={4} rowAlign="center">
            <h2>Über Mich</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
              doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
              consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
              magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
              dolorem! Obcaecati sint neque non delectus soluta!
            </p>
            <Button to={routes.ABOUT.path}>Mehr über mich</Button>
          </GridColumn>

          <GridColumn columnSpan={5} columnStart={6}>
            <Link to={routes.ABOUT.path}>
              <Img fluid={data.image1.childImageSharp.fluid} />
            </Link>
          </GridColumn>
        </GridRow>
      </Grid>
    </Section>

    <Section full>
      <Grid>
        <GridRow>
          <GridColumn columnSpan={4} columnStart={7} rowAlign="center">
            <h2>Schauspiel</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
              doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
              consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
              magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
              dolorem! Obcaecati sint neque non delectus soluta!
            </p>
            <Button to={routes.ACTING.path}>Mehr zu Schauspiel</Button>
          </GridColumn>
          <GridColumn columnSpan={4} columnStart={3}>
            <Link to={routes.ACTING.path}>
              <Img fluid={data.image2.childImageSharp.fluid} />
            </Link>
          </GridColumn>
        </GridRow>
      </Grid>
    </Section>

    <Section full>
      <Grid>
        <GridRow>
          <GridColumn columnSpan={4} columnStart={2} rowAlign="center">
            <h2>Theaterpädagogik</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
              doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
              consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
              magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
              dolorem! Obcaecati sint neque non delectus soluta!
            </p>
            <Button to={routes.THEATRE_PEDAGOGY.path}>Mehr zu Theaterpädagogik</Button>
          </GridColumn>

          <GridColumn columnSpan={5} columnStart={8}>
            <Link to={routes.THEATRE_PEDAGOGY.path}>
              <Img fluid={data.image3.childImageSharp.fluid} />
            </Link>
          </GridColumn>
        </GridRow>
      </Grid>
    </Section>

    <Section full>
      <Grid>
        <GridRow>
          <GridColumn columnSpan={6} columnStart={3}>
            <h2>Kontakt</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
              doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
              consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
              magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
              dolorem! Obcaecati sint neque non delectus soluta!
            </p>
            <Button to={routes.CONTACT.path}>Kontakt aufnehmen</Button>
          </GridColumn>
        </GridRow>
      </Grid>
    </Section>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape(),
};

IndexPage.defaultProps = {
  data: null,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "image-01.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    image2: file(relativePath: { eq: "image-02.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    image3: file(relativePath: { eq: "image-03.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
