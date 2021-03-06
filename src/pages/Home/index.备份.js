import React from 'react';
//组件
import Index from './Index/index.js';
import House from './House';
import News from './News';
import Profile from './Profile';
import NoMatch from '../NoMatch';
import { Route, Switch } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './index.scss';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname
    };
  }
  render() {
    return (
      <div className="home">
        <Switch>
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/house" component={House}></Route>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/profile" component={Profile}></Route>
          <Route component={NoMatch}></Route>
        </Switch>

        <div className="tabBar">
          <TabBar
            unselectedTintColor="#333"
            tintColor="lime"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="首页"
              icon={<span className="iconfont icon-ind"></span>}
              selectedIcon={<span className="iconfont icon-ind"></span>}
              selected={this.state.selectedTab === '/home'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home'
                });
                this.props.history.push('/home');
              }}
            ></TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-findHouse"></span>}
              selectedIcon={<span className="iconfont icon-findHouse"></span>}
              title="找房"
              key="找房"
              selected={this.state.selectedTab === '/home/house'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/house'
                });
                this.props.history.push('/home/house');
              }}
            ></TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-infom"></span>}
              selectedIcon={<span className="iconfont icon-infom"></span>}
              title="资讯"
              key="资讯"
              selected={this.state.selectedTab === '/home/news'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/news'
                });
                this.props.history.push('/home/news');
              }}
            ></TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-my"></span>}
              selectedIcon={<span className="iconfont icon-my"></span>}
              title="我的"
              key="我的"
              selected={this.state.selectedTab === '/home/profile'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/profile'
                });
                this.props.history.push('/home/profile');
              }}
            ></TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}
export default Home;
