/* global $ _ opspark */
$(document).on('ready', onDocReady)



function onDocReady() {
    $.getJSON('data/product.json', onProductData)
    .fail(function() {console.log('getJSON on products failed!');})
};

function onProductData(products) {
    //initialize ui
    initializeUI(products);
    //show all products
    showProducts(products);
    
}



function showProducts(products) {
    $('#products')
    .empty()
    .append(createProductListItems(products));
}

function initializeUI(products) {
    $('<ul>')
    .attr('id', 'products')
    .addClass('list-products')
    .appendTo($('main'));
}

function createProductListItems(products) {
    // creates ul list of products
    return _.map(products, createListItem)
}

function createListItem(product) {
    //creates li item of product
    return $('<li>')
    .addClass('li-product')
    .data('product', product)
    .text(product.desc)
    .append(createProductImageDiv(`img//product/thumbs/${product.image}`, 'product-thumb'))
    .append(createProductDetailsDiv(product.desc, product.price, product.stock))
}

function createProductImageDiv(url, cssClass) {
    //use jquery to create and return a div that wraps an image, uses url as src
    return $('<div>').addClass(cssClass)
    .append($('<img>').attr('src', url));
}

function createProductDetailsDiv(desc, price, stock) {
    // create a div with 3 child divs, for each, each has a unique class
}

function onProductClick(event) {
    //handles what to do when product is clicked
    const product = $(event.currentTarget).data('product');
    showProductDetails(product);
    
}

function showProductDetails(product) {
    //create markup for product detal, show it in a pop up
}


function search(collection, term) {
    //create something to collect your output
    // iterate collection
    return _.reduce(collection, function(value, i, collection) {
        if (typeof value === 'string' || value.includes(term)) return collection;
        if (typeof value === 'object') search(value, term);
            
        
    }, [])

}
//base case is it a string, does it contain the term, if yes collect the product
//recursive case, is this value a collection, if it is 