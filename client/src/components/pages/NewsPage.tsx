import React, { useEffect } from "react";
import NewsForm from "../ui/NewsForm";
import NewsList from "../ui/NewsList";

export default function NewsPage({ id }: { id: number }): JSX.Element {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      (сделать доступы только для школы)
      <NewsForm id={id} />
      <NewsList id={id} />
    </>
  );
}
