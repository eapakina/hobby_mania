import React from "react";
import FeedbackForm from "./FeedbackForm";
import FedbackList from "./FedbackList";

export default function Feedbacks({id}): JSX.Element {
    
  return (

    <>
    <FeedbackForm id={+id}/>
    <FedbackList id={+id} />
  </>
  );
}
