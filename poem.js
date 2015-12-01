$(function(){
    $.fn.poem = main;
});

function main(params){
    var baseDom = this;

    if(params === "destroy"){
        destroy(baseDom);
    }else if(typeof params === "object"){
        init(params, baseDom);
    }
}

function init(params, baseDom){
    var imageName = params.imageName;
    var title = params.title;

    // get template
    var template = $("#poemTemplate").html();
    // replace template variables
    template = template.format(imageName, title);

    // startup components
    var body = document.body;
    $(template).appendTo(body);
    baseDom.detach().appendTo($(".poemBody", body));
}

function destroy(baseDom){
    var baseHtml = $(".poemBody").html();
    $(".poemContainer").empty().html(baseHtml);
}