import React from 'react';
import { render } from 'react-dom';
import {
  CssBaseline,
} from '@material-ui/core';
import './App.css';
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const rclnodejs = require('rclnodejs');
rclnodejs.init().then(() => {
  const node = new rclnodejs.Node('publisher_example_node');
  const publisher = node.createPublisher('std_msgs/msg/String', 'topic');
  publisher.publish(`Hello ROS 2 from rclnodejs`);
  node.spin();
});


render(
  <div>
    <CssBaseline />
    <p>
      Hello world!
    </p>
  </div>,
  document.getElementById('root'),
);
