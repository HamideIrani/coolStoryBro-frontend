import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { selectMySpace } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import Space from "../../components/Space";

export default function MySpace(props) {
  const space = useSelector(selectMySpace);

  console.log(space);

  return (
    <div>
      My Space!
      {/* <Nav.Item>
        <Nav.Link as={NavLink} to="/me">
          My Space
        </Nav.Link>
      </Nav.Item>
      <div>
        <Space
          key={space.id}
          id={space.id}
          title={space.title}
          description={space.description}
          backgroundColor={space.backgroundColor}
          color={space.color}
          showLink={false}
        />
      </div> */}
    </div>
  );
}
