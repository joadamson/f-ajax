const $getCommentsBtn = document.querySelector('.getCommentsBtn');
const $commentsContainer = document.querySelector('.commentsContainer');
const $postsContainer = document.querySelector('.postsContainer');
const $albumsContainer = document.querySelector('.albumsContainer');
const $photosContainer = document.querySelector('.photosContainer');
const $todosContainer = document.querySelector('.todosContainer');
const $usersContainer = document.querySelector('.usersContainer');
const $getPostsBtn = document.querySelector('.getPostsBtn');
const $getAlbumsBtn = document.querySelector('.getAlbumsBtn');
const $getPhotosBtn = document.querySelector('.getPhotosBtn');
const $getTodosBtn = document.querySelector('.getTodosBtn');
const $getUsersBtn = document.querySelector('.getUsersBtn');
const $clearBtn = document.querySelector('.clear');

const posts = 'https://jsonplaceholder.typicode.com/posts';
const comments = 'https://jsonplaceholder.typicode.com/comments';
const albums = 'https://jsonplaceholder.typicode.com/albums';
const photos = 'https://jsonplaceholder.typicode.com/photos';
const todos = 'https://jsonplaceholder.typicode.com/todos';
const users = 'https://jsonplaceholder.typicode.com/users';

const request = (cb, url) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.response);
        cb(response);
    });
    
    xhr.addEventListener('error', err => {
        console.log('Error');
        console.log(err);
    });
    
    xhr.send();
}

$getCommentsBtn.addEventListener('click', () => {
    request(response => {
        const template = response.map(item => commentsTemplate(item)).join('');
        $commentsContainer.innerHTML = template;
    }, comments);

    $postsContainer.style.display = "none";
    $albumsContainer.style.display = "none";
    $photosContainer.style.display = "none";
    $todosContainer.style.display = "none";
    $usersContainer.style.display = "none";

    $commentsContainer.style.display = "block";
});

$getPostsBtn.addEventListener('click', () => {
    request(response => {
        const template = response.map(item => postsTemplate(item)).join('');
        $postsContainer.innerHTML = template;
    }, posts);

    $commentsContainer.style.display = "none";
    $albumsContainer.style.display = "none";
    $photosContainer.style.display = "none";
    $todosContainer.style.display = "none";
    $usersContainer.style.display = "none";

    $postsContainer.style.display = "flex";
});

$getAlbumsBtn.addEventListener('click', () => {
    request(response => {
        const template = response.map(item => albumsTemplate(item)).join('');
        $albumsContainer.innerHTML = template;
    }, albums);

    $commentsContainer.style.display = "none";
    $postsContainer.style.display = "none";
    $photosContainer.style.display = "none";
    $todosContainer.style.display = "none";
    $usersContainer.style.display = "none";

    $albumsContainer.style.display = "flex";
});

$getPhotosBtn.addEventListener('click', () => {
    request(response => {
        const template = response.map(item => photosTemplate(item)).join('');
        $photosContainer.innerHTML = template;
    }, photos);

    $commentsContainer.style.display = "none";
    $albumsContainer.style.display = "none";
    $postsContainer.style.display = "none";
    $todosContainer.style.display = "none";
    $usersContainer.style.display = "none";

    $photosContainer.style.display = "flex";
});

$getTodosBtn.addEventListener('click', () => {
    request(response => {
        const template = response.map(item => todosTemplate(item)).join('');
        $todosContainer.innerHTML = template;
    }, todos);

    $postsContainer.style.display = "none";
    $albumsContainer.style.display = "none";
    $photosContainer.style.display = "none";
    $commentsContainer.style.display = "none";
    $usersContainer.style.display = "none";
    
    $todosContainer.style.display = "flex";
});

$getUsersBtn.addEventListener('click', () => {
    request(response => {
        const template = response.map(item => usersTemplate(item)).join('');
        $usersContainer.innerHTML = template;
    }, users);

    $postsContainer.style.display = "none";
    $albumsContainer.style.display = "none";
    $photosContainer.style.display = "none";
    $todosContainer.style.display = "none";
    $commentsContainer.style.display = "none";

    $usersContainer.style.display = "flex";
});

$clearBtn.addEventListener('click', e => {
    e.preventDefault();

    window.location.reload();
});

function commentsTemplate({name, email, body}){
    return `
        <div class="mt-3">
            <div style="background: #191516;" class="card">
                <div class="header text-light">
                    <h6 class="m-1 mb-2">@${name}</h6>
                </div>
                <div class="body p-3">
                    <div style="background: #C9DAEA;" class="rounded border border-light p-3 text-light">
                        ${body}
                    </div>
                </div>
                <div style="height: 1px;" class="bg-light"></div>
                <div class="footer text-light">
                    <h6 class="m-1">${email}</h6>
                </div>
            </div>
        </div>
    `
}

function postsTemplate({userId, title, body}){
    return `
        <div class="col-lg-6 mt-3">
            <div style="background: #439775;" class="box p-1 rounded border border-primary text-light">
                <div class="d-flex align-items-center">
                    <h6 class="ml-3">${title}</h6>
                </div>
                <div style="background: #48BF84;" class="p-1 rounded">
                    <p>${body}</p>
                </div>
                <div class="footer">
                    <h6>userID ${userId}</h6>
                </div>
            </div>
        </div>
    `
}

function albumsTemplate({userId, title}){
    return `
        <div class="col-lg-3 mt-3">
            <div style="background: #36827F;" class="p-3 rounded d-flex justify-content-center align-items-center flex-wrap">
                <a href="" class="btn btn-primary">${title}</a>
                <p class="text-light m-4">usesrId ${userId}</p>
            </div>
        </div>
    `
}

function photosTemplate({title, url}){
    return `
        <div class="col-lg-3 mt-3">
            <div class="card rounded-3">
                <img class="card-img rounded-top" src="${url}">
                <div class="text-center m-3">${title}</div>
            </div>
        </div>
    `
}

function todosTemplate({title, completed}){
    if(completed){
        return `
            <div class="col-lg-3 mt-3">
                <div class="card rounded-3">
                    <div style="background: #69dc9e" class="card-header text-center">
                        <h5 class="card-title text-light">${title}</h5>
                    </div>
                    <div class="card-body text-center bg-light">
                        <h3 style="color: #04E824">Completed</h3>
                    </div>
                </div>
            </div>
        `
    }else {
        return `
            <div class="col-lg-3 mt-3">
                <div class="card rounded-3">
                    <div style="background: #D81E5B" class="card-header text-center">
                        <h5 class="card-title text-light">${title}</h5>
                    </div>
                    <div class="card-body text-center bg-light">
                        <h3 style="color: #DB3A34">Uncompleted</h3>
                    </div>
                </div>
            </div>
        `
    }
}

function usersTemplate({name, username, email, address, phone, website, company}){
    let {street, suite, city, zipcode} = address;
    let {name: n, catchPhrase, bs} = company;
    console.log(street, suite, city, zipcode);

    return  `
        <div class="col-lg-6 mt-3">
            <div class="card">
                <img src="https://johannesippen.com/img/blog/humans-not-users/header.jpg" alt="" />
                <div class="data p-2">
                    <h2 class="text-center">${name}</h2>
                    <p><b>username:</b> ${username}</p>
                    <p><b>email:</b> ${email}</p>
                    <span>
                        <b>Address:</b>
                        <ul>
                            <li>street: ${street}</li>
                            <li>suite: ${suite}</li>
                            <li>city: ${city}</li>
                            <li>zipcode: ${zipcode}</li>
                        </ul>
                    </span>
                    <p><b>phone:</b> ${phone}</p>
                    <p><b>website:</b> ${website}</p>
                    <span>
                        <b>Company:</b>
                        <ul>
                            <li>name: ${n}</li>
                            <li>catchPhrase: ${catchPhrase}</li>
                            <li>bs: ${bs}</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    `
}