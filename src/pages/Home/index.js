import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSpaces } from "../../store/spaces/selectors";
import { fetchSpaces } from "../../store/spaces/thunk";
import Space from "../../components/Space";

export default function Homepage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <div>
      <h1>Spaces</h1>

      <div className="spaceholder">
        {spaces.map((space) => {
          return (
            <Space
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
              showLink={true}
              showStory={false}
            />
          );
        })}
      </div>
    </div>
  );
}
