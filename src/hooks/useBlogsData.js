import { useEffect, useState } from "react"

const useBlogsData = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return [blogs, setBlogs]
}

export default useBlogsData;