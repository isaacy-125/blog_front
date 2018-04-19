import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Avatart, Icon, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../Actions/docsAction';
import axios from '../../../util/axios';
import './Docs.less';

class Docs extends Component {
  componentWillMount() {
    axios.get('/docs/list').then((data) => {
      this.props.docsActionList(data.data.message);
    }).catch((err) => {
      console.log(err);
    })
  }
  render() {
    const listData = this.props.docsReducer.get('docsList').toJS();
    return (
      <div className="docsContainer">
        <div className="writeDocs">
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
                title={<a href="#">{item.title}</a>}
                description={item.description}
              />
              {item.content}
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
