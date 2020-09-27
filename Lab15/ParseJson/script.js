$(document).ready(function () {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/';
    const POST_URL = BASE_URL + 'posts?userId=';
    const COMMENT_URL = BASE_URL + 'comments?postId=';

    function onLoadComment(postId) {
        return function (e) {
            const commentUrl = COMMENT_URL + postId;
            $.get(commentUrl)
                .done(function (comments) {
                    let renderedHtml = '';
                    console.log('Comments: ', comments);
                    comments.forEach(c => renderedHtml += `
                    <li>
                        <div>Name: ${c.name}</div>
                        <div>Email: ${c.email}</div>
                        <div>${c.body}</div>
                    </li>
                    `);

                    $('.comments.post-id-' + postId).html("<ul>" + renderedHtml + "</ul>");
                })
                .fail(function (xhr, status, exception) {
                    console.log(xhr, status, exception);
                });
        }
    }

    $('#btnLoad').click(function (e){
        e.preventDefault();
        let userId = $('#userId').val();
        const postUrl = POST_URL + userId;
        $.get(postUrl)
            .done(function (posts) {
                let renderedHtml = '';
                posts.forEach(p => renderedHtml += `
                <li>
                    <div><strong>${p.title}</strong></div>
                    <div>${p.body}</div>
                    <div><button class="btnShowComments post-id-${p.id}">Show Comments</button></div>
                    <ul class="comments post-id-${p.id}"></ul>
                </li>`);
                $('#posts').html("<ul>" + renderedHtml + "</ul>");

                posts.forEach(p => $('.btnShowComments.post-id-' + p.id).click(onLoadComment(p.id)));
            })
            .fail(function (xhr, status, exception) {
                console.log(xhr, status, exception);
            })
    });
});