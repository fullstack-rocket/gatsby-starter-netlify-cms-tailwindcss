import React from "react";
import { navigate } from "gatsby-link";

import Layout from "../../components/Layout";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
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
        <div className="container">
          <h1>File Upload</h1>
          <form
            name="file-upload"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="file-upload" />
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
              <label htmlFor="attachment">Choose a file…</label>
              <input
                name="attachment"
                type="file"
                onChange={this.handleAttachment}
              />
            </div>
            <button className="btn btn-orange" type="submit">
              Send
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}
