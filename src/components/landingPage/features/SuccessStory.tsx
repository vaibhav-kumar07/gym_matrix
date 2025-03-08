import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getSuccessStories } from "@/lib/SuccessStory";
import React from "react";

export default function SuccessStory() {
    const successStories = getSuccessStories("member");
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        Success Stories
                    </h2>
                    <p className="text-lg text-gray-600">
                        See how leading fitness businesses achieve exceptional
                        results with Fitify
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {successStories.map((story, index) => (
                        <Card
                            key={index}
                            className="bg-white border-gray-100 hover:shadow-lg transition-shadow shadow-lg rounded-2xl overflow-hidden px-8 py-4"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={story.image}
                                    alt={story.owner}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {story.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {story.location}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                {story.testimonial}
                            </p>
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant="secondary"
                                    className="bg-indigo-100 text-indigo-700"
                                >
                                    {story.growth} Growth
                                </Badge>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
