import React from "react";
import { Link } from "react-router-dom";

export default function Space(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.showLink && (
        <Link to={`/spaces/${props.id}`}>
          <button>Visit space</button>
        </Link>
      )}

      <div>
        {props.showStory
          ? props.stories
            ? props.stories.map((story) => {
                return (
                  <div key={story.id}>
                    name={story.name}
                    content={story.content}
                    <img src={story.imageUrl} alt="" />
                  </div>
                );
              })
            : "There is no story to show"
          : ""}
      </div>
    </div>
  );
}
