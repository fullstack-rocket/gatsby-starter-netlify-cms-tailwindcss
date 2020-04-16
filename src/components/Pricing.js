import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <section className="mt-5">
    <div className="flex flex-wrap flex-col content-center md:flex-row">
      {data.map((price) => (
        <div className="flex-1" key={price.plan}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 p-3">
            <h4 className="text-center text-xl font-semibold">{price.plan}</h4>
            <h2 className="text-center text-orange-600">${price.price}</h2>
            <p className="text-center">{price.description}</p>

            <ul className="list-disc ml-5">
              {price.items.map((item) => (
                <li className="py-2" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
