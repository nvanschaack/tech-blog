//functionality to take content from the form and insert into db (comment table)
async function commentForm (event) {
    event.preventDefault();

    const formContent = document.getElementById('comment').value
    const blogOfComment = document.getElementById('blog_id').value

    if (!formContent) {
        alert('Include text in your comment!')
    } else {
        await fetch('/api/comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    blog_id: blogOfComment,
                    content: formContent,
                }
            )
        })

        document.location.reload()
    }
};

//add event listener for whem form is submitted
document.getElementById('commentForm').addEventListener('submit', commentForm);