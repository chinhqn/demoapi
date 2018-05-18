import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actionFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actionFetchProducts(res.data))
        })
    }
}

export const actionFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actionDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actionDeleteProduct(id))
        })
    }
}

export const actionDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actionAddProductRequest = (product) => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actionAddProduct(res.data));
        })
    }
}

export const actionAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actionGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actionGetProduct(res.data));
        });
    }
}

export const actionGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actionUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actionUpdateProduct(res.data));
        });
    }
}

export const actionUpdateProduct = (product) =>{
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
