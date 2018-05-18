import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
import {actionFetchProductsRequest, actionDeleteProductRequest} from './../../actions/index';
class ProductListPage extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     products: [],
    //     // };
    // };

    componentDidMount () {
        callApi('products', 'GET', null).then(res => {
            // this.setState({
            //     products: res.data,
            // })
            this.props.fetchAllProducts();
        })
    }
    onDelete = (id) => {
        this.props.allDeleteProduct(id);
    }

    
    render() {
        // var {products} = this.state ; 
        var {products} = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10">Thêm sản phẩm</Link>
                <ProductList>
                    {this.showProducts(products)}       
                </ProductList>    
            </div>
        );
    }
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index)=> {
                return (
                    <ProductItem 
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            });
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actionFetchProductsRequest());
        },
        allDeleteProduct: (id) => {
            dispatch(actionDeleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductListPage);
