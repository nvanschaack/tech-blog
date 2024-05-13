async function newBlog(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!title && !content) {
        alert('Include text in your title and content')
    } else {
        await fetch('/api/blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: title,
                    content: content,
                }
            )
        })

        document.location.replace('/dashboard')
    }
}

document.getElementById('newBlogPost').addEventListener('submit', newBlog)