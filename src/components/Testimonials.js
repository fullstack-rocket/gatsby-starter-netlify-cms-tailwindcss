import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial) => (
      <blockquote
        key={v4()}
        className="bg-orange-200 my-3 p-3 border-l-4 border-orange-500"
      >
        <p className="mb-0">{testimonial.quote}</p>
        <footer className="italic"> – {testimonial.author}</footer>
      </blockquote>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
