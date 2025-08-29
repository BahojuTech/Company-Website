export default async function sitemap(){
    
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/service`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/training`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`
        },
    ]
}