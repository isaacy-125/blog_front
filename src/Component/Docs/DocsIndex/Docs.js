import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Avatart, Icon, Button, Input, Select } from 'antd';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../Actions/docsAction';
import axios from '../../../util/axios';
import './Docs.less';

const Option = Select.Option;

class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOption: 'title',
    }
  }
  componentWillMount() {
    axios.get('/docs/list').then((data) => {
      this.props.docsActionList(data.data.message);
    }).catch((err) => {
      console.log(err);
    })
  }
  onChangeSearchOption(value) {
    this.setState({
      searchOption: value,
    });
  }
  handleOnSearch(e) {
    axios.get(`/docs/list?${this.state.searchOption}=${e.target.value}`).then((data) => {
      this.props.docsActionList(data.data.message);
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    const listData = this.props.docsReducer.get('docsList').toJS();
    const selectBefore = (
      <Select
        defaultValue="title"
        style={{ width: 90 }}
        onChange={this.onChangeSearchOption.bind(this)}
      >
        <Option value="title">标题</Option>
        <Option value="description">描述</Option>
        <Option value="user">作者</Option>
      </Select>
    );
    return (
      <div className="docsContainer">
        <div className="writeDocs">
          <Input
            addonBefore={selectBefore}
            addonAfter={<Icon type="search" />}
            style={{
              width: 500,
            }}
            onPressEnter={this.handleOnSearch.bind(this)}
          />
          <Button
            type="primary"
            onClick={() => {
              this.props.history.push('/newDocs');
            }}
          >写文章</Button>
        </div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={false}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[<p>阅读</p>]}
              extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={<a href="#">{item.title}-{item.user}</a>}
                description={item.description}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(state => ({
  docsReducer: state.docsReducer,
}), mapDispatchToProps)(Docs));
