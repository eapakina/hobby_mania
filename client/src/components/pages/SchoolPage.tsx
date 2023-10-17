import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useParams } from "react-router-dom";

// import { useAppDispatch } from "../../redux/hooks";
import Description from "../ui/Description";
import Classes from "../ui/Classes";
import Comments from "../ui/Comments";
import NewsPage from "./NewsPage";

export default function SchoolPage(): JSX.Element {
  // const dispatch = useAppDispatch();
  const [choose, setChoose] = useState("description");
  const { id = 1 } = useParams();
  console.log({ id });
  //   useEffect(() => {
  //     void dispatch(getNewsThunk());
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => setChoose("description")}>Описание</Button>
        <Button onClick={() => setChoose("classes")}>Занятия</Button>
        <Button onClick={() => setChoose("Comments)}>Отзывы</Button>
        <Button onClick={() => setChoose("blog")}>Новости</Button>
      </ButtonGroup>
      {choose === "description" && <Description id={+id} />}
      {choose === "classes" && <Classes />}
      {choose === "Comments && <CCommentsd={+id}/>}
      {choose === "blog" && <NewsPage id={+id} />}
    </>
  );
}
