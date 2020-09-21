const blogAddForm = $elem('#blogaddform');
const blogSaveBtn = $elem('.save-btn');
const blogCancelBtn = $elem('.cancel-btn');
const elem = $elem('#new-item'); 
const title = $elem('#title');
const content = $elem('#blog-content');
const add_modal = M.Modal.getInstance(elem);
const blogItems = JSON.parse(localStorage.getItem('blogItems'));
const itemsContainer = $elem(".blog-container");

const generate_slug = (title) => {
    let split_title = title.split(" ")
    if(split_title.length>1) {
        const new_title = `${split_title[0]} ${split_title[1]} ${Math.floor((Math.random() * 140) + 1)}`
        return new_title.replace(/\s/g, '-');
    }
    return `${title}-${Math.floor((Math.random() * 140) + 1)}`
}


blogAddForm.addEventListener('submit', e => {
    e.preventDefault();
    let blogItem;
    if(title.value && content.value) {
        blogItem = {
            title: title.value,
            content: content.value,
            slug: generate_slug(title.value),
            createdAt: new Date().toDateString()
        }
    }

    // add the created item into the store
    blogItems.push(blogItem)
    localStorage.setItem('blogItems', JSON.stringify(blogItems))

    // create a new item and add it to the dom
    blogItems.forEach(item => {
        const card = $newElem('div')
        const p = $newElem('p');
        const quote = $newElem('blockquote');
        const h = $newElem('h4');
        const del = $newElem('button');
        const edit = $newElem('button');
        const foot = $newElem('div');

        // style the item
        card.classList.add("col", "s12", "m4", "l6", "card");
        p.className = "flow-text";
        h.style.textTransform = "uppercase";
        h.className = "center";
        card.setAttribute('id', item.slug)

        // add content
        h.innerText = item.title;
        p.innerText = item.content;
        quote.innerText = `Posted on: ${item.createdAt}`
        del.innerHTML = `Delete <i class="material-icons right">delete<i>`
        edit.innerHTML = `Edit <i class="material-icons right">edit<i>`

        del.classList.add("btn", "red", "right");
        edit.classList.add("btn", "orange");


        card.appendChild(h);
        card.appendChild(p);
        card.appendChild(quote);
        foot.appendChild(edit);
        foot.appendChild(del);
        card.appendChild(foot);

        // add item to DOM
        let added_item = $elem(`#${item.slug}`)
        if(!added_item) itemsContainer.appendChild(card)
    });
    
    // clear the form and close the modal
    setTimeout(blogAddForm.reset(), 2000)
})

blogAddForm.addEventListener('reset', e => {
    add_modal.close();
})