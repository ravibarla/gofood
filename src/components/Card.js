import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img className="card-img-top" alt="Card-pic" src="https://source.unsplash.com/random/300×300/?chair" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">some thin alcmal.</p>

          <div className="container w-100">
            <select className="m-2 h-100  bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">half</option>
              <option value="full">full</option>
            </select>
            <div className="d-inline h-100">total price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
