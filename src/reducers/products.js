var initialState = [
    {
        id: 1,
        name: "Iphone 6",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Iphone 7",
        price: 500,
        status: false
    },
    {
        id: 3,
        name: "Iphone 8",
        price: 600,
        status: true
    }

];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state]
    }
};

export default products;