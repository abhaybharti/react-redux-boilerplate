// src/components/List.jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="List-group list-group-flush">
    {articles.map(el => (
    
     <li className="list-group-item" key={el.id}>
     <div>  {el.title} </div>
        <div> 
          
          &#x2715;</div>
      </li>
    
    ))}
  </ul>
);


const List = connect(mapStateToProps)(ConnectedList);
export default List;
