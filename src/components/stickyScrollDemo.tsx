"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time and streamline productivity with your team.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1200&auto=format"
        className="h-full w-full object-cover"
        alt="editing"
      />
    ),
  },
  {
    title: "Real Time Updates",
    description:
      "See changes as they happen without confusion or version issues.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format"
        className="h-full w-full object-cover"
        alt="real time"
      />
    ),
  },
  {
    title: "Version Control",
    description:
      "Never lose progress thanks to live version synchronization.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format"
        className="h-full w-full object-cover"
        alt="version control"
      />
    ),
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time and streamline productivity with your team.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1200&auto=format"
        className="h-full w-full object-cover"
        alt="editing"
      />
    ),
  },
  {
    title: "Scalable Platform",
    description:
      "Grow your work without limits thanks to scalable cloud support.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1200&auto=format"
        className="h-full w-full object-cover"
        alt="scalable"
      />
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
