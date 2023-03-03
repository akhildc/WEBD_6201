console.log('selectors.js loaded')

function highlight(element)
{
    element.css("background-color", "#fcf30040")
}

function cssSelectors()
{
    // all paragraphs
    $('p').css('background-color', '#2a9d8f');

    // using classes
    $('.red-box').css('background-color', '#2a9d8f')

    $('h1,h2').css('background-color', '#3a86ff');
    $('li:even').css('background-color','red');
}

function traversingTheDom()
{
    $('#list').find('li').css('background-color', '#3a86ff');

    //all parents of the ul
    $('#list').parents('body').css('background-color', '#3a86ff');

    // direct parents
    $('#list').parent('div').css('font-size', '20px');

    //.siblings('div') <- siblings divs of element

    // prev & next
    $('#list').prev().css('background-color', '#3a86ff');
    $('#list').next().css('background-color', '#3a86ff');
    $('#list').next().prev().css('background-color', '#3a86ff');
}

function filtering()
{
    //$('#list').find('li').filter(':even').css('background-color', '#3a86ff');

    // $('#list').filter(function(index)
    // {
    //     return index % 3 === 0;
    // }).css('background-color', '#219ebcf');

    // highlighting
    let items = $('#list').find('li');
    highlight(items);
}

function addingReplacingRemoving()
{
    // insert as the first child
    $('ul ul:first').append($("<li>I'm  going to be the last item.</li>"));
    // reverse the syntex
    $("<li>Now I am going to be the last item!</li>").prependTo("ul ul:first");

    // after
    $('.red-box').after("<div class='red-box'>Another Red box!</div>");

    // sample text
    let text1 = "Last night, Darth vader came down from planet Vulcan."

    // replace with new elements.
    $('li').replacewith(`<li>${text1}</li>`);

    // replace all 
    $("<div class='green-box'>Created Green box</div>").replaceAll(".red-box");

    //remove
    $('li').remove();

    // detaching
    let detachedItems = $('li').detach()
    $('#content').append(detachedItems);

}   

addingReplacingRemoving();
//filtering();
//traversingTheDom();
//cssSelectors();