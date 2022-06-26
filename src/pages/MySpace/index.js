import React from "react";
import { selectMySpace } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import Space from "../../components/Space";
import StoryForm from "./StoryForm";
import MySpaceForm from "./MySpaceForm";

export default function MySpace(props) {
  const mySpace = useSelector(selectMySpace);

  return mySpace ? (
    <div>
      <StoryForm />
      <MySpaceForm />
      <Space
        id={mySpace.id}
        title={mySpace.title}
        description={mySpace.description}
        backgroundColor={mySpace.backgroundColor}
        color={mySpace.color}
        stories={mySpace.stories}
        showLink={false}
        showStory={true}
        showDelete={true}
      />
    </div>
  ) : (
    "loading..."
  );
}
