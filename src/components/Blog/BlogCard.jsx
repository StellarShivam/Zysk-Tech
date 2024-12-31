import React from "react";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({ category, title, description, image, author }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden  mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-3">
        <span className="text-sm font-bold text-defaultTextPurple">
          {category}
        </span>
        <div className="flex items-start justify-between group-hover:text-defaultTextPurple">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <ArrowUpRight className="h-5 w-5 mt-1" />
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center space-x-3 pt-2">
          <img
            src={author.image}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-500">{author.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
