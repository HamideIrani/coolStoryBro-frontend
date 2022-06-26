import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postStory } from "../../store/user/actions";

export default function StoryForm() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );

  function submitForm(event) {
    event.preventDefault();
    dispatch(postStory(name, content, imageUrl));
  }

  return showForm ? (
    <div className="form">
      <form onSubmit={submitForm}>
        <h1>Post a cool story bro</h1>
        <div className="row">
          <div className="column">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name of your story"
              required
            ></input>

            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tell your story"
            ></input>

            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Paste your image url here"
            ></input>
          </div>
          <div className="column">
            Image preview: <br />
            {imageUrl ? (
              <img src={imageUrl} alt="preview" className="thumbnail" />
            ) : null}
          </div>
        </div>

        <hr />
        <button className="button" onClick={submitForm} type="submit">
          Submit
        </button>
        <button
          className="button"
          onClick={() => {
            setShowForm(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  ) : (
    <button
      className="button"
      onClick={() => {
        setShowForm(true);
      }}
    >
      Post a cool story bro
    </button>
  );
}
