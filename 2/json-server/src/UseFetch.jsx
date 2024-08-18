import useFetch from "react-fetch-hook";

const ApiUseFetch = () => {
  const { data: posts, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // Handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <div>
      <h1 className='title'>Post of users</h1>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2 className='users'>{post.name}</h2>
          <p>{post.body}</p>
          <p>{post.username}</p>
          <p>{post.phone}</p>
          <a href={post.website}>{post.website}</a>
          <p>{}</p>



        </div>
      ))}
    </div>
  );
};
export default ApiUseFetch