function Post({ title, body }) {
  return (
    <div style={{border:"1px solid gray",width:"500px", margin:"auto"}}>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
