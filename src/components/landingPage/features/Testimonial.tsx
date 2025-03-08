"use client";

import { getTestimonialsByRole } from "@/lib/testimonial";
import React, { useState, useEffect } from "react";

export default function Testimonial() {
    const testimonials = getTestimonialsByRole("member");
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = testimonials.length;

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="py-20 bg-black">
            <div className="max-w-4xl mx-auto px-6 relative">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-400">
                        Join thousands of satisfied gym owners worldwide
                    </p>
                </div>

                {/* Slider */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-full flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg"
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <p className="text-xl text-gray-700 text-center mb-6">
                                    "{testimonial.quote}"
                                </p>
                                <h4 className="font-semibold text-gray-900">
                                    {testimonial.author}
                                </h4>
                                <p className="text-gray-600">
                                    {testimonial.position}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                    >
                        ❯
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`h-3 w-3 mx-1 rounded-full ${
                                    index === currentIndex
                                        ? "bg-indigo-500"
                                        : "bg-gray-400"
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
