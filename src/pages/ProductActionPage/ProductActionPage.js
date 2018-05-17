import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: '',
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (e) =>{
        e.preventDefault();
        var {history} = this.props;
        var {txtName, txtPrice, chkbStatus} = this.state;
        callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus,
        }).then(res=> {
            history.goBack();
            // history.push('/product-list');
        });
    }
    
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phâm</label>
                        <input type="text" className="form-control" id="" placeholder="Input field"
                            name='txtName'
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" className="form-control" id="" placeholder="Input field"
                            name='txtPrice'
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                name='chkbStatus'
                                value={chkbStatus}
                                onChange={this.onChange}
                            />
                            Còn hàng
                          </label>
                    </div>
                    <button type="submit" className="btn btn-primary mr-10">Lưu lại</button>
                    <Link to="/product-list" className="btn btn-danger"> 
                        Trở lại
                    </Link>
                </form>

            </div>
        );
    }
}

export default ProductActionPage;
