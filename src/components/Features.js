import React from "react";
import PropTypes from "prop-types";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="container">
    <div class="grid md:grid-cols-2 gap-4">
      {gridItems.map((item, idx) => (
        <section className="d-block px-4 py-5" key={idx}>
          <div className="text-center">
            <div className="inline-block w-1/3">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      ))}
    </div>
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
