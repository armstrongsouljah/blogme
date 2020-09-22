const editForm = $elem('#blogeditform');


editForm.addEventListener('submit', e => {
    e.preventDefault()
    const itemForEdit = localStorage.getItem('edit')

    if(editTitle.value && editContent.value) {
        let editting = blogItems.find(item => item.slug == itemForEdit)
        editting.title = editTitle.value;
        editting.content = editContent.value;
        localStorage.setItem('blogItems', JSON.stringify(blogItems));
        const card = $elem(`div#${itemForEdit}`);

        card.children[0].innerText = editTitle.value
        card.children[1].innerText = editContent.value
        editForm.reset()
    }
})

editForm.addEventListener('reset', e => {
    localStorage.removeItem('edit')
    edit_modal.close();
})