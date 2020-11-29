async function init() {
    let res = await fetch('https://www.cfdtraining.vn/api/danh-sach-khoa-hoc')
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    let html = '';
    for (let i in res) {
        let thubnail = JSON.parse(res[i].thubnail);
        html += `<div class="item col-4">
        <div class="cover">
            <img src="https://www.cfdtraining.vn/${thubnail.link}" alt="">
        </div>
        <div class="title">${res[i].title}</div>
        <div class="content">${res[i].short_description}</div>
    </div>`

    }
    console.log(html)
    document.querySelector('.course-list').innerHTML = html;
}
init();