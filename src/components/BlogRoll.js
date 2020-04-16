import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="container">
        <div className="grid md:grid-cols-2">
          {posts &&
            posts.map(({ node: post, ...rest }, idx) => (
              <>
                <div
                  key={post.id}
                  className={`flex flex-col justify-between rounded overflow-hidden shadow-lg m-3 p-3 ${
                    post.frontmatter.featuredpost ? "is-featured" : ""
                  }
                    }`}
                >
                  <Link
                    className="h4 text-dark text-top flex flex-row p-2"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.featuredimage ? (
                      <div className="flex-1 max-w-1/3 p-2">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <div className="flex-1">
                      <h3 className="text-xl">{post.frontmatter.title}</h3>
                      <div className="my-2">{post.frontmatter.date}</div>
                    </div>
                  </Link>

                  <p className="m-2 text-justify">{post.excerpt}</p>
                  <div>
                    <Link
                      className="w-auto inline-block bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
                      to={post.fields.slug}
                    >
                      Keep Reading →
                    </Link>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
