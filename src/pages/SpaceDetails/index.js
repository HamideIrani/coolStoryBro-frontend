import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Space from "../../components/Space";
import Loading from "../../components/Loading";
import { fetchSpaceById } from "../../store/spaces/thunk";
import { selectSpaceDetails } from "../../store/spaces/selectors";

export default function SpaceDetails() {
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  if (!space || parseInt(space.id) !== parseInt(id)) return <Loading />;

  return (
    <div>
      <Space
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        stories={space.stories}
        showLink={false}
      />
      <div></div>
    </div>
  );
}
