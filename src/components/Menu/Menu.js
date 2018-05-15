import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <div>
            <div className="navbar navbar-default">
                <a className="navbar-brand">Call API</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a>Trang Chủ</a>
                    </li>
                    <li>
                        <a>Quản lý sản phẩm</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Menu;
