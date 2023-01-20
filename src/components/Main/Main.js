import './Main.css';
import BlogCard from '../BlogCard/BlogCard.js';
import { useBlogs } from '../../hooks/useBlogs.js';

export default function Main() {
  const blogs = useBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
