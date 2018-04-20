import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button, Form, Input, message } from 'antd';
import { withRouter } from 'react-router-dom';
import BraftEditor from 'braft-editor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIn } from 'immutable';
import axios from '../../../util/axios';
import 'braft-editor/dist/braft.css';
import './DocsNew.less';

const FormItem = Form.Item;

class DocsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
  }
  handleChange(content) {
    this.setState({
      content: content,
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const reqData = {
          title: values.title,
          description: values.description,
          content: this.state.content,
          user: this.props.indexReducer.getIn(['user', 'username']),
        }
        axios.post('/docs/newList', reqData).then((data) => {
          message.success('发布成功')
          this.props.history.goBack();
        }).catch((err) => {
          console.log(err);
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: '',
      onChange: this.handleChange.bind(this),
    }
    return (
      <div className="newDocsContainer">
        <div
          className="newDocsHeader"
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          <Icon
            type="left"
          />
          后退
        </div>
       <Form>
         <FormItem
          label="标题"
         >
           {getFieldDecorator('title', {
             rules: [{
               required: true,
               message: '文章标题必须',
             }]
           })(
             <Input size="default" />
           )}
         </FormItem>
         <FormItem
          label="描述"
         >
           {getFieldDecorator('description', {
             rules: [{
               required: true,
               message: '文章描述必须',
             }]
           })(
             <Input size="default" />
           )}
         </FormItem>
       </Form>
       <BraftEditor {...editorProps}/>
       <div className="docsNewBottom">
        <Button
          type="primary"
          onClick={this.handleSubmit.bind(this)}
        >
          发布
        </Button>
       </div>
      </div>
    )
  }
}

export default Form.create()(withRouter( connect(state => ({
  indexReducer: state.indexReducer,
}))(DocsNew)));
