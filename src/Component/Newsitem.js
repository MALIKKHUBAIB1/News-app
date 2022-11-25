// import React, { Component } from 'react'
import { Link } from "react-router-dom";

// export default class Newsitem extends Component {
//     render() {
import React from "react";

const Newsitem = (props) => {
  // let {title,description,imageUrl,newsUrl,authors,dates,sources} = props;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">
            {props.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.sources}
              <span className="visually-hidden">unread messages</span>{" "}
            </span>
          </h4>
          <p className="card-text">{props.description}</p>
          {/* <h4 className='card-text'>Author:{authors}</h4> */}
          <div className="card-footer text-muted" style={{ color: "red" }}>
            {/* by {props.authors} on {new Date(props.dates).toGMTString()} */}
          </div>
          <a href={props.newsUrl} className="btn btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
