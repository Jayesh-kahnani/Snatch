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
    <div className="container mx-auto mt-8 px-4 sm:px-0 text-gray-600">
      {" "}
      {/* Set text color to black */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Orders List</h1>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author?.name || "Unknown"}
          />
        ))}
      </div>
    </div>
  );
}
