import React, { Component } from 'react';
class ProductActionPage extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  
                  <form>
                      <div className="form-group">
                          <label for="">Tên sản phâm</label>
                          <input type="text" className="form-control" id="" placeholder="Input field" />
                      </div>

                      <div className="form-group">
                          <label for="">Giá</label>
                          <input type="number" className="form-control" id="" placeholder="Input field" />
                      </div>
                      <div className="form-group">
                          <label for="">Trạng thái:</label>
                      </div>
                      
                      <div className="checkbox">
                          <label>
                                <input type="checkbox"/>
                                Coàn hàng
                          </label>
                      </div>
                      
                      <button type="submit" className="btn btn-primary">Lưu lại</button>
                  </form>
                  
            </div>
        );
    }
}

export default ProductActionPage;
