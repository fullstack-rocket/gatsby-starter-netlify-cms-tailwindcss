import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-white bg-red-600 leading-none p-6 shadow-xl text-5xl">
            Latest Stories
          </h1>
        </div>
        <section className="mt-5">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
