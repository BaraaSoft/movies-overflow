import React from 'react';

import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchGenre } from './menu.action';
import { SearchBox } from './search.component'

const { SubMenu } = Menu;


const DivSearchContainer = styled(Menu.Item)`
    width:480px;
    margin-left:10%;
`;


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
            <Menu style={{ overflow: 'hidden' }} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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

                <DivSearchContainer disabled>
                    <SearchBox />
                </DivSearchContainer>
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
            <SubMenu key="sub2" title="More">
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
