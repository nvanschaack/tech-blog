//when we click on submit button, the blog will update and we will see the updated blog on the dashboard

const updateBlog = async () => {
    const updatedBlogTitle = document.getElementById('title').value
    const updatedBlogContent = document.getElementById('content').value
    const blogId= document.getElementById('blogId').value

    await fetch(`/api/blog/${blogId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            title: updatedBlogTitle,
            content: updatedBlogContent,
        })
    })
    document.location.replace('/dashboard')
}

document.getElementById('editForm').addEventListener('submit', updateBlog);