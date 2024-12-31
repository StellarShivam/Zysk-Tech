import React from "react";
import BlogCard from "./BlogCard";
import Blog1 from "../../assets/Blog1.png";
import Blog2 from "../../assets/Blog2.png";
import Blog3 from "../../assets/Blog3.png";

import Avatar1 from "../../assets/Avatar (4).png";
import Avatar2 from "../../assets/Avatar (5).png";
import Avatar3 from "../../assets/Avatar (6).png";

const blogPosts = [
  {
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: Blog1,
    author: {
      name: "Olivia Rhye",
      image: Avatar1,
      date: "20 Jan 2024",
    },
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: Blog2,
    author: {
      name: "Phoenix Baker",
      image: Avatar2,
      date: "19 Jan 2024",
    },
  },
  {
    category: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image: Blog3,
    author: {
      name: "Lana Steiner",
      image: Avatar3,
      date: "18 Jan 2024",
    },
  },
];

const BlogSection = () => {
  return (
    <section className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-8">
        <div>
          <p className="text-defaultTextPurple font-medium mb-2">Our blog</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Latest blog posts
          </h2>
          <p className="text-gray-600 mt-2">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="hidden sm:block font-semibold px-4 py-3 bg-defaultPurple text-white rounded-lg hover:bg-defaultTextPurple transition-colors sm:ml-4 sm:self-start">
          View all posts
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <button className="w-full px-6 py-4 font-semibold bg-defaultPurple text-white rounded-lg hover:bg-defaultTextPurple transition-colors">
          View all posts
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
