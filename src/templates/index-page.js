import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="flex justify-center items-center mt-0 bg-fixed bg-left-top h-50vh"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className="flex justify-around flex-col leading-none h-32">
        <h1 className="text-4xl lg:text-6xl text-white bg-red-600 leading-none p-1 shadow-xl">
          {title}
        </h1>
        <h3 className="text-2xl lg:text-3xl text-white bg-red-600 leading-none p-1 shadow-xl">
          {subheading}
        </h3>
      </div>
    </div>
    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{mainpitch.title}</h1>
            <h3>{mainpitch.description}</h3>
            <h2 className="my-3">{heading}</h2>
            <p>{description}</p>
            <Features gridItems={intro.blurbs} />
            <div className="row">
              <div className="col text-center">
                <Link className="btn btn-outline-primary" to="/products">
                  See all products
                </Link>
              </div>
            </div>
            <div className="col">
              <h2 className="my-5">Latest stories</h2>
              <BlogRoll />
              <div className="col text-center mt-5">
                <Link className="btn btn-outline-primary" to="/blog">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
