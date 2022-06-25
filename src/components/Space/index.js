import React from "react";
import { Link } from "react-router-dom";
import { deleteStory } from "../../store/user/actions";
import { useDispatch } from "react-redux";

export default function Space(props) {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    console.log("deleting story!", id);
    dispatch(deleteStory(id));
  };

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
                    <h2>{story.name}</h2>
                    <p>{story.content}</p>
                    <img className="thumbnail" src={story.imageUrl} alt="" />

                    <button onClick={() => onDelete(story.id)}>
                      Delete story
                    </button>
                  </div>
                );
              })
            : "There is no story to show"
          : ""}
      </div>
    </div>
  );
}
