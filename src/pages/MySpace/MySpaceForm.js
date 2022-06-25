import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editMySpace } from "../../store/user/actions";
import { selectMySpace } from "../../store/user/selectors";

export default function MySpaceForm() {
  const space = useSelector(selectMySpace);

  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState(space.title);
  const [description, setDescription] = useState(space.description || "");
  const [backgroundColor, setBackgroundColor] = useState(space.backgroundColor);
  const [color, setColor] = useState(space.color);

  function submitForm(event) {
    event.preventDefault();
    console.log(title, description, backgroundColor, color);
    dispatch(editMySpace(title, description, backgroundColor, color));
  }

  return showForm ? (
    <div>
      <form onSubmit={submitForm}>
        <h1>Edit your space</h1>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title of your space"
          required
        ></input>

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description of your space"
        ></input>

        <label>Background color:</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        ></input>

        <label>Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>

        <button onClick={submitForm} type="submit">
          Save changes
        </button>
        <button
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
      onClick={() => {
        setShowForm(true);
      }}
    >
      Edit my space
    </button>
  );
}
