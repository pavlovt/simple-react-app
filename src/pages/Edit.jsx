import React, { useContext, useState, useEffect } from "react";
import MyContext from "../Context";

export function Edit(props) {
  const [state, dispatch] = useContext(MyContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    if (props.match.params.id) {
      state &&
        state.posts.forEach(v => {
          if (v.id == props.match.params.id) {
            setTitle(v.title);
            setBody(v.body);
            setPost(v);
          }
        });
    }
  }, []);

  function save(e) {
    e.preventDefault();
    console.log(title, body, post);
  }

  return (
    <div>
      <h2>Add / Edit Post</h2>

      <form onSubmit={save}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <textarea
          col="10"
          row="4"
          placeholder="Description"
          value={body}
          onChange={e => {
            setBody(e.target.value);
          }}
        />
        <br />
        <button>Save</button>
      </form>
    </div>
  );
}
