import React from "react";

export default function TagButton({ setTag }) {
  const tags = ["All", "HTML,CSS", "Animation", "JS", "React", "Wordpress"];

  return (
    <div>
      {tags.map((tag, index) => (
        <button key={index} onClick={() => setTag(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
}