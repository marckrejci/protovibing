"use client"

import { useEffect } from "react"

export function useHashNavigation() {
    useEffect(() => {
        // Handle initial hash on page load
        const hash = window.location.hash
        if (hash) {
            // Small delay to ensure content is rendered
            setTimeout(() => {
                const element = document.querySelector(hash)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
            }, 100)
        }

        // Handle hash changes (when clicking anchor links)
        const handleHashChange = () => {
            const hash = window.location.hash
            if (hash) {
                const element = document.querySelector(hash)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
            }
        }

        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [])
}
