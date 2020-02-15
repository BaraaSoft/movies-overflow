import React from 'react';

import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchGenre } from './menu.action'

const { SubMenu } = Menu;


class TopMenuComponent extends React.Component {
    state = {
        current: 'home',
    };

    componentDidMount() {
        this.props.fetchGenre();
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        const { menuGenre } = this.props;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item />
                <Menu.Item />
                <Menu.Item key="home">
                    <Link to="/">
                        <Icon type="home" />
                        Home
                    </Link>
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="block" />Genre</span>}>
                    {GenreSubGroup(this.props)}
                </SubMenu>
                <Menu.Item key="nowPlaying">
                    <Link to="/">
                        <Icon type="pic-center" />
                        Now on cinema
                    </Link>
                </Menu.Item>
                <Menu.Item key="fire">
                    <Link to="/">
                        <Icon type="fire" />
                        Most recent
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}


const GenreSubGroup = ({ menuGenre }) => {
    return (
        <Menu.ItemGroup key="Genre">
            {
                menuGenre.map((genre, index) => {
                    if (index >= Math.floor(menuGenre.length / 2)) return null;
                    return (
                        <Menu.Item key={`Genre:${genre.id}`}>{genre.name}</Menu.Item>
                    )
                })
            }
            <SubMenu key="sub2" title="more">
                {menuGenre.map((genre, index) => {
                    if (index < Math.floor(menuGenre.length / 2)) return null;
                    return (
                        <Menu.Item key={`Genre:${genre.id}`}>{genre.name}</Menu.Item>
                    )
                })}
            </SubMenu>
        </Menu.ItemGroup>
    );
}

const mapStateToProps = ({ menuGenre }) => {
    return { menuGenre };
}

const TopMenu = connect(mapStateToProps, { fetchGenre })(TopMenuComponent)
export { TopMenu };


// <Menu.Item key="setting:2">Option 2</Menu.Item>

//     <Menu.Item key="setting:1">Option 1</Menu.Item>
//     <Menu.Item key="setting:2">Option 2</Menu.Item>
//     <Menu.Item key="setting:1">Option 1</Menu.Item>
//     <Menu.Item key="setting:2">Option 2</Menu.Item>
//     <Menu.Item key="setting:1">Option 1</Menu.Item>
//     <Menu.Item key="setting:2">Option 2</Menu.Item>
//     <Menu.Item key="setting:1">Option 1</Menu.Item>
//     <Menu.Item key="setting:2">Option 2</Menu.Item>

// <DivHorizontal title="choose your genre">
//     <DivItem key="setting:1">Option 1</DivItem>
//     <DivItem key="setting:3">Option 1</DivItem>
//     <DivItem key="setting:2">Option 1</DivItem>
//     <DivItem key="setting:4">Option 1</DivItem>
// </DivHorizontal>