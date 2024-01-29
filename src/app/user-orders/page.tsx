import Post from "../ui/order-list"; // Update import path
import prisma from "../../../lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: { select: { name: true } },
    },
  });

  return posts;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <h1>Your orders</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorName={post.author?.name || "Unknown"}
        />
      ))}
    </>
  );
}
