import React from "react";
import { useParams } from "react-router-dom";

export default function BoardDetail() {
  const { bid } = useParams();
  return (
    <div style={{margin: '20px'}}>
      Board Detail Page, bid={bid}
    </div>
  )
}