'use client'

export default function myImageLoader({ src, width, quality }: {src:string, width:number, quality?:number }) {
    return `https://old.codingthailand.com/site/img/${src}?w=${width}&q=${quality || 75}`
    // return `https://rbl-dev.digitalcampaignsite.com/images/home/${src}?w=${width}&q=${quality || 75}`
    // return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`    
}