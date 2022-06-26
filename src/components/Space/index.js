import React from "react";
import { Link } from "react-router-dom";
import { deleteStory } from "../../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

export default function Space(props) {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    console.log("deleting story!", id);
    dispatch(deleteStory(id));
  };

  const token = useSelector(selectToken);

  return (
    <div
      className="spacebox"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.showLink && (
        <Link to={`/spaces/${props.id}`}>
          <button className="button">Visit space</button>
        </Link>
      )}

      <div className="storyContainer">
        {props.showStory ? (
          props.stories && props.stories.length > 0 ? (
            props.stories.map((story) => {
              return (
                <div key={story.id}>
                  <div
                    className="storyItem"
                    style={{
                      backgroundImage: `url(${story.imageUrl})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <h2>{story.name}</h2>
                    <p>{story.content}</p>
                  </div>
                  {token && props.showDelete ? (
                    <button
                      className="button"
                      onClick={() => onDelete(story.id)}
                    >
                      Delete story
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              );
            })
          ) : (
            <div className="storyItem">There is no story to show</div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
