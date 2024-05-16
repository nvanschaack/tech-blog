//delete the specific blog post when the delete button is clicked
const deleteBtn = document.querySelectorAll('.delete')

const deleteBlog = async (e) => {
    console.log(e.target.value)
    await fetch(`/api/blog/${e.target.value}`, {
        method: 'DELETE',
    })
    document.location.reload()
}

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', deleteBlog)

}