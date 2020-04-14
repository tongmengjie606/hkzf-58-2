import React from 'react';
import { Link } from 'react-router-dom';
class NoMatch extends React.Component {
  render() {
    return (
      <div>
        你访问的页面没有找到，请点击<Link to="/home">首页</Link>跳转
      </div>
    );
  }
}
export default NoMatch;
