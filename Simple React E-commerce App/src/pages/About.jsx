import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About AR Himel
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nihil voluptatibus harum porro expedita labore cupiditate officia, sapiente cum itaque pariatur placeat aperiam quibusdam repellat autem natus quam inventore ipsa facere sit? Ullam quod optio possimus quas iure, saepe qui cum veritatis obcaecati eaque cumque eius, vero vitae quasi impedit!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white shadow rounded p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum ullam ea laudantium, at voluptas. Culpa obcaecati voluptatem maiores inventore!
          </p>
        </div>
        <div className="bg-white shadow rounded p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ducimus! Doloribus libero neque non eum.
          </p>
        </div>
        <div className="bg-white shadow rounded p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Values
          </h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Continuous Learning</li>
            <li>Client-Centric Mindset</li>
          
            <li>Quality-First Approach</li>
            <li>Integrity and Transparency</li>
          </ul>
        </div>
        <div className="bg-white shadow rounded p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Why Choose AR Himel?
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti tempora assumenda inventore fuga atque rem. Amet enim architecto incidunt quibusdam!
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-6">
          Want to stand out online? Connect with us today — together, we’ll build something impactful.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
