type Post = { id: string; title: string };
const QueryPage = async () => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default QueryPage;
