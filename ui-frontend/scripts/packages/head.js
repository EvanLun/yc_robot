import $ from 'jQuery';

let arr =["首页","学会公告","科学前沿","学会学术","科学普及","新闻站点","考试介绍","资料中心","联系我们"];
let arrUrl =[];
arr.forEach((item,index)=>{
    $("#nav").append(`
        <a herf=${arrUrl[index]}>
            <li>${item}</li>
        </a>
    `);
})