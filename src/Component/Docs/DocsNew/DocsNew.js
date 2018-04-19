import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import './DocsNew.less';

class DocsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleChange(content) {
    console.log(content)
  }

  handleRawChange(rawContent) {
    console.log(rawContent)
  }
  render() {
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: '',
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
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
            style={{
              color: 'white',
            }}
          />
          后退
        </div>
       <BraftEditor {...editorProps}/>
      </div>
    )
  }
}

export default withRouter(DocsNew);
