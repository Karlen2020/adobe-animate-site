import { useEffect } from "react";

function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
export function Helmet({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMetaDescription(description);
  }, [title, description]);

  return null;
}
