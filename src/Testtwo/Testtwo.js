import React, {Component} from 'react';
import ChildImg from './ChildImg'

class Testtwo extends Component {

    render() {
        const { date, text, author } = this.props;
        return(
            <>
                <h5>我是子组件Testtwo</h5>

                <div>
                    <ChildImg user={author.name} url={this.props.author.avatarUrl}/>
                    {/*<img src={this.props.author.avatarUrl} alt={this.props.author.name}/>*/}
                    <p>{text}</p>
                    <p>{author.name}</p>
                    <p>{this.formatDate(date)}</p>
                </div>
            </>
        )
    }

    formatDate = (date) => {
        return date.toLocaleDateString();
    }



}

export default Testtwo;
