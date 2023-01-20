import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blogs.js';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBlogs();
      setBlogs(response);
    };
    fetchData();
  }, []);
  return blogs;
}
