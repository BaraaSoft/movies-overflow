import React from 'react';

import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchGenre } from './menu.action';
import { SearchBox } from './search.component'
import media from '../media';

import { MoreviewTypes } from '../moreviewTypes'
const { SubMenu } = Menu;


const DivSearchContainer = styled(Menu.Item)`
    width:580px;
    margin-left:32px;
     ${media.xxl`
         width:482px;
    `}
    ${media.xl`
         width:480px;
         min-height:60px;
    `}
    ${media.md`
        min-height:50px;
        width:380px;
    `}
     ${media.sm`
        min-height:50px;
        width:280px;
    `}
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
                    <Link to={`/more?info=${MoreviewTypes.NOW_SHOWING}&subinfo=${"movies"}`}>
                        <Icon type="pic-center" />
                        Now on cinema
                    </Link>
                </Menu.Item>
                <Menu.Item key="fire">
                    <Link to={`/more?info=${MoreviewTypes.TOP_MOVIES_RECENTLY}&subinfo=${""}`}>
                        <Icon type="fire" />
                        The top recently
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

                        <Menu.Item key={`Genre:${genre.id}`}>
                            <Link to={`/more?info=${MoreviewTypes.Genre}&subinfo=${genre.name}&withGenre=${genre.id}`}>
                                {genre.name}
                            </Link>
                        </Menu.Item>

                    )
                })
            }
            <SubMenu key="sub2" title="More">
                {menuGenre.map((genre, index) => {
                    if (index < Math.floor(menuGenre.length / 2)) return null;
                    return (

                        <Menu.Item key={`Genre:${genre.id}`}>
                            <Link to={`/more?info=${MoreviewTypes.Genre}&subinfo=${genre.name}&withGenre=${genre.id}`} >
                                {genre.name}
                            </Link>

                        </Menu.Item>

                    );
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
