(function() {
  var company = {
    company_id: 1234,
    company_name: '会社名'
  };

  var article = {
    article_id: 9876,
    article_title: 'タイトル'
  };

  console.log(company);
  console.log(article);

  const mergedData = $.extend({}, company, article);

  console.log(mergedData);
})()