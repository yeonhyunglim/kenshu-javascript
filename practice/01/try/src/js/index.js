(function() {
    'use strict';
    
    const company = {
        company_id: 1234,
        company_name: '会社名'
    };
    const article = {
        article_id: 9876,
        article_title: 'タイトル'
    }
    console.log(company);
    console.log(article);
    
    //Objectの結合
    const mergedObj = Object.assign({}, company, article); 
    /*
    빈 객체({})를 전달하여
    company 객체와 article 객체가 빈 객체({})에 복사되어 병합된다.
    company 객체와 article 객체는 변경이 되지 않는다.
    */
    
    console.log(mergedObj);
}) ()