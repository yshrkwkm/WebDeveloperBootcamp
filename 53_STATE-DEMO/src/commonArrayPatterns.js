const shoppingCart = [
    {id: 1, product: 'HDMI Cable', price: 400},
    {id: 2, product: 'Oven', price: 2800},
    {id: 3, product: 'Peach Pie', price: 650},
];

[...shoppingCart, {id: 4, product: 'Coffee Mug', price: 780}];

shoppingCart.filter((item) => item.id !== 2);

shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    };
});

shoppingCart.map((item) => {
    if (item.id === 3) {
        return {...item, price: 1080};
    } else {
        return item;
    }
});