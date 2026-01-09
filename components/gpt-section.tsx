"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { ExternalLink, ChevronRight } from "lucide-react"

const GPT_DATA = [
    {
        name: "User Persona Simulator",
        description: "Simulate user & buyer personas to accelerate your customer research. This is not a replacement for real interviews, but use it to help form hypotheses and prep better questions.",
        url: "https://pfndr.co/gpt-persona",
    },
    {
        name: "User Journey Map",
        description: "Transform your ICP, user research, or product idea into vivid user personas and journey maps. Get empathy-driven user stories, strategic journey maps, visual infographics, and PRD-ready documentation.",
        url: "https://pfndr.co/gpt-journey",
    },
    {
        name: "ICP Strategist",
        description: "Your expert guide to defining your Ideal Customer Profile (ICP). This GPT helps you analyze your business, identify key customer segments, and build detailed buyer personas through a structured, interactive process. Get a clear ICP report ready for further research.",
        url: "https://pfndr.co/gpt-icp",
    },
    {
        name: "Founding Hypothesis",
        description: "Generate a testable one-sentence bet about who you're serving, what problem you're solving, and why they'll choose you.",
        url: "https://pfndr.co/gpt-hypothesis",
    },
    {
        name: "PRD Generator",
        description: "Generate production-ready PRDs optimized for your favorite vibe coding platform. Paste your ICP, user journeys, or product idea; get structured markdown output ready for AI code generation.",
        url: "https://pfndr.co/gpt-prd",
    },
]

export function GPTSection() {
    const [shuffledGpts, setShuffledGpts] = useState<{ name: string; description: string; url: string }[]>([])

    useEffect(() => {
        const shuffled = [...GPT_DATA].sort(() => Math.random() - 0.5)
        setShuffledGpts(shuffled)
    }, [])

    if (shuffledGpts.length === 0) return null

    return (
        <section className="w-full max-w-6xl mx-auto px-8 md:px-12 py-8 animate-fade-in-up">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    Custom GPTs
                </h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
                    Here are some custom designed resources that we may use together during our sessions, or you can reference them on your own at any time:
                </p>
            </div>

            {/* Masonry-style Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {shuffledGpts.map((gpt, index) => (
                    <div key={`${gpt.name}-${index}`} className="break-inside-avoid">
                        <a
                            href={gpt.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="glass-card gradient-border p-6 flex flex-col transition-all duration-300 hover:border-white/20 hover:translate-y-[-4px]">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-2 py-0.5 rounded-full border border-primary/10">
                                        Custom GPT
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors leading-tight">
                                    {gpt.name}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                    {gpt.description}
                                </p>
                                <div className="mt-auto flex items-center text-xs font-semibold text-secondary group-hover:underline underline-offset-4">
                                    Try it on ChatGPT
                                    <ChevronRight className="w-3 h-3 ml-1" />
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
