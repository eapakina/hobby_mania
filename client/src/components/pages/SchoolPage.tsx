import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useParams } from "react-router-dom";

// import { useAppDispatch } from "../../redux/hooks";
import Description from "../ui/Description";
import Classes from "../ui/Classes";
import Feedbacks from "../ui/Feedbacks";
import PostsPage from "./PostsPage";

export default function SchoolPage(): JSX.Element {
  // const dispatch = useAppDispatch();
  const [choose, setChoose] = useState("description");
  const { id = 1 } = useParams();
  console.log({ id });
  //   useEffect(() => {
  //     void dispatch(getPostsThunk());
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => setChoose("description")}>Описание</Button>
        <Button onClick={() => setChoose("classes")}>Занятия</Button>
        <Button onClick={() => setChoose("feedbacks")}>Отзывы</Button>
        <Button onClick={() => setChoose("blog")}>Новости</Button>
      </ButtonGroup>
      {choose === "description" && <Description id={+id} />}
      {choose === "classes" && <Classes />}
      {choose === "feedbacks" && <Feedbacks />}
      {choose === "blog" && <PostsPage id={+id} />}
    </>
  );
}
