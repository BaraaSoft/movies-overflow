import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AutoComplete, Button, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

import { searchMovieByName } from './menu.action';


const { Option } = AutoComplete;


const debounce = function (callback, delayTime) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, arguments)
        }, delayTime);
    }
};

function renderOption(item) {
    return (

        <Option key={item.id} text={item.title}>
            <Link to={`/details/${item.id}?isMovies=${true}&title=${item.title || "TV"}`}>
                <div className="global-search-item">
                    <span className="global-search-item-desc">

                        {item.title}

                    </span>
                    <span className="global-search-item-count"></span>
                </div>
            </Link>
        </Option>
    );
}

const SearchBoxComponent = (props) => {
    const { searchedMovies, searchMovieByName } = props;
    return (
        <AutoComplete
            className="global-search"
            size="large"
            style={{ width: '100%' }}
            dataSource={searchedMovies.map(renderOption)}
            onSelect={(e) => ({})}
            onSearch={debounce((query) => searchMovieByName(query), 300)}
            placeholder="input here"
            optionLabelProp="text"
        >
            <Input
                suffix={
                    <Button
                        className="search-btn"
                        style={{ marginRight: -12 }}
                        size="large"
                        type="default"
                    >
                        <Icon type="search" />
                    </Button>
                }
            />
        </AutoComplete>
    );
}

const mapStateToProps = ({ searchedMovies }) => {
    return { searchedMovies };
}

const SearchBox = connect(mapStateToProps, { searchMovieByName })(SearchBoxComponent)
export { SearchBox };