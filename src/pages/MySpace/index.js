import React from "react";
import { selectMySpace } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import Space from "../../components/Space";

export default function MySpace(props) {
  const mySpace = useSelector(selectMySpace);

  return mySpace ? (
    <div>
      <Space
        id={mySpace.id}
        title={mySpace.title}
        description={mySpace.description}
        backgroundColor={mySpace.backgroundColor}
        color={mySpace.color}
        story={mySpace.stories}
        showLink={false}
        showStory={true}
      />
    </div>
  ) : (
    "loading..."
  );
}
