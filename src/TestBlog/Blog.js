import React, { Component } from 'react';

class Blog extends Component {
    render() {
        const { posts } = this.props;

        const sidebar = (
            <ul>
                {posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        );

        const content = posts.map( post =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h3>{post.content}</h3>
            </div>
        );
        return (
            <div>
                {sidebar}
                <hr/>
                {content}
            </div>
        )
    }
}

export default Blog;
