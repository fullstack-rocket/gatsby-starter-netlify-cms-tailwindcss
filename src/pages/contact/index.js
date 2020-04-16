import React from "react";
import { navigate } from "gatsby-link";

import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="mt-5">
          <div className="container">
            <h1>Contact</h1>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <div className="inputGroup">
                  <label htmlFor="bot-field">Don’t fill this out:</label>
                  <input name="bot-field" onChange={this.handleChange} />
                </div>
              </div>
              <div className="inputGroup">
                <label htmlFor="name">Your name</label>
                <input name="name" onChange={this.handleChange} required />
              </div>
              <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type={"email"}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="message">Message</label>
                <input
                  name="message"
                  as="textarea"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button className="btn btn-orange" type="submit">
                Send
              </button>
            </form>
          </div>
        </section>
      </Layout>
    );
  }
}
