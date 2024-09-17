'use client'

import { useEffect, useRef } from 'react'

interface KaTeXProps {
    math: string
    block?: boolean
}

declare global {
    interface Window {
        katex: any
    }
}

const KaTeX: React.FC<KaTeXProps> = ({ math, block = false }) => {
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (ref.current && window.katex) {
            window.katex.render(math, ref.current, {
                throwOnError: false,
                displayMode: block,
                output: 'html',
            })
        }
    }, [math, block])

    return <span ref={ref} />
}

export default KaTeX;