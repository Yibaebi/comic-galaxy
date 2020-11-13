import React from 'react';
import './App.css';
import 'animate.css';

const Posts = ({ postsToRender }) => {return (
    <ul className="gallery">
      {postsToRender.map((post, index) => (
        <li key={index} className="animate__animated animate__fadeInUp" id="gallery-item">
          <img key={post.id} src={post.image} alt="comic"/>
          <div className="dropdown-text animate__animated animate__fadeInDown">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Posts;