"use client";
import React from "react";
import Image from "next/image";
import { popularDestinationsData } from "../data/destinations";
import { FaStar } from "react-icons/fa";

export default function PopularDestinations() {
  return (
    <section
      id="destinations"
      className="bg-sky py-16 px-4 sm:px-8 lg:px-16"
      aria-labelledby="destinations-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="destinations-heading"
            className="text-4xl font-extrabold text-aviation mb-2"
          >
            Destinasi Terpopuler
          </h2>
          <p className="text-slate-ink max-w-2xl mx-auto text-lg">
            Jelajahi tempat liburan favorit yang dipilih oleh para pelancong
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {popularDestinationsData.map((dest) => (
            <article
              key={dest.id}
              className="bg-sky rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden border border-aviation/12"
            >
              <div className="relative w-full h-64">
                <Image
                  src={dest.imgUrl}
                  alt={dest.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {dest.discount && (
                  <div className="absolute top-4 left-4 bg-black text-sky text-sm font-semibold px-3 py-1 rounded-full">
                    {dest.discount} OFF
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-aviation mb-2">
                  {dest.title}
                </h3>
                <p className="text-slate-ink text-sm mb-4 line-clamp-3">
                  {dest.description}
                </p>
                <div className="flex items-center text-sm text-yellow-500">
                  <FaStar className="mr-1" />
                  <span className="text-slate-ink">4.5 rating</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
