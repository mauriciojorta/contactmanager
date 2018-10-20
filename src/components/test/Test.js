import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    userId: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          userId: data.userId
        })
      );
  }

  // componentWillMount() {
  //   console.log('Component will mount...');
  // }

  // componentDidUpdate() {
  //   console.log('Component did update...');
  // }

  // componentWillUpdate() {
  //   console.log('Component will update...');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('Get snapshot before update...');
  // }

  render() {
    const { title, userId } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{userId}</p>
      </div>
    );
  }
}

export default Test;
