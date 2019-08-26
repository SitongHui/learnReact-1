import React, {Component} from 'react';
import './App.css';

// 引入子组件
import Testone from './Testone/Testone';
import Testtwo from './Testtwo/Testtwo';
import Clock from './TestClock/Clock';
import CreateRef from './TestCreateRef/CreateRef'
import Toggle from './TestToggle/Toggle';
import Greeting from './TestGreeting/Greeting';
import LoginControll from './TestLoginControll/LoginControll';
import UnReadMessage from './TestUnReadMsg/UnReadMessage'
import Page from './TestPage/Page';
import MapFunc from './TestMap/MapFunc';
import Blog from "./TestBlog/Blog";
import Calculator from './Temperature/Calculator'

function TimeString() {
    return (
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    );
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isGoing: true,
            numberOfGuests: 2
        };
    }
    formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    };
    getGreeting = (user) => {
        if (user) {
            return <h1>Hello, {this.formatName(user)}!</h1>
        }
        return <h1>Hello, strange.</h1>
    };

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({date: new Date()});
    //     }, 1000);
    // }

    handleInputChange = name => e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    };

    render() {
        const user = {
            firstName: 'Crystal',
            lastName: 'Hui'
        };
        const comment = {
            date: new Date(),
            text: '学习学习学习，好好学习，天天向上！！！O(∩_∩)O~',
            author: {
                name: 'Crystal',
                avatarUrl: 'https://placekitten.com/g/64/64'
            }
        };
        const message = ['React', 'Vue', 'Angular'];
        const numbers = [1, 2, 3, 4, 5];
        const posts = [
            { id: 1, title: 'dj', content: 'dj is clever!' },
            { id: 2, title: 'hst', content: 'hst is clever!' }
        ];

        return (
            <>
                <Calculator />

                {
                    /* 表单 受控组件 */
                }
                <div className='form'>
                    <form>
                        <label>
                            参与：
                            <input
                                type="checkbox"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange('isGoing')}
                            />
                        </label>
                        <br/>
                        <label>
                            来宾人数:
                            <input
                                type="number"
                                value={this.state.numberOfGuests}
                                onChange={this.handleInputChange('numberOfGuests')}
                            />
                        </label>
                    </form>
                </div>

                <Blog posts={posts}/>
                <MapFunc numbers={numbers}/>
                <Page />
                <UnReadMessage unReadMessage={message}/>
                <LoginControll />
                <Greeting greeting={false}/>
                <Toggle />
                <Clock />
                <CreateRef />

                <div>
                    <Testtwo
                        date={comment.date}
                        text={comment.text}
                        author={comment.author}/>
                </div>

                <div>
                    <Testone name='sara'/>
                    <Testone name='crystal'/>
                    <Testone name='heriky'/>
                </div>

                <h1>
                    Hello, {this.formatName(user)}
                </h1>

                <div className='box'>
                    {this.getGreeting(user)}
                </div>

                <div>
                    <h1>Hello, world</h1>
                    <h2>It is. <TimeString /></h2>
                </div>
            </>
        )
    }
}

export default App;
