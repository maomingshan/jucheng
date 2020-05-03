import React, {Component} from 'react';
import '../assets/css/login.css'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p className={"goBack"} onClick={()=>{
                    this.props.history.go(-1)
                }}>{"<"}</p>
                <img className={"login-img"} src={"https://m.juooo.com/static/img/login_logo.4a43235.png"}/>
                <div className={"inputDiv"}>
                    <input type={"text"} placeholder={"请输入手机号或邮箱"} className={"userName"}/>
                </div>
                <div className={"inputDiv"}>
                    <input type={"text"} placeholder={"请输入密码"} className={"passWord"}/>
                </div>
                <input type={"button"} value={"登录"} className={"login-btn"}/>
                <div className={"ligin-footer"}>
                    <span className={"footer-left"}>忘记密码</span>
                    <span className={"footer-right"}>验证码登录/注册</span>
                </div>
                <div className={"bottom-box"}>
                    <span>其他登录方式</span>
                    <img className={"bottom-img1"} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAflBMVEUAAABZ0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v/N82+IAAAAKXRSTlMAHAbS5d7Zd6ZmYUkS+/PI8FAy6LSTLRa6rCENsPdavoZUnHFDPduAaSOXaiYAAALWSURBVFjDvZhpc+IwDIbl2DnJSQ5COMLZ9v3/f3A7O3RLIzkJsLvPB4YZjGW/lmRZNEITHdbapEBq9PoQNfQ4cRSUGFAGUUyPsNgmANzAL5ZqQ7RRy8IPXADJdkEzcSIPQP/R0YDuowfgRc6slXiA8RWJKN8A3vSK1BpwwxF7TugCa0WjHHOkvjOxaT9FfhwbUAOVoklUBdRWY6sMyZlmcU6QrSw2PJglzWRp4ClxFhda0WyUhquEHXnI4of8PIPH9uVk0PGD8aKRDXWuYRQ9iDKoB/6C3ZIeZrnD8ce8OUJ6ghD5/R7WqCz23tsSKNv3hkSq+z8ukIrCXDL8IbuK8qQo6AsPvhQaJ9wju78Pj27s4QojNj0GVMIox8X+9lWL+gZgnESV9ZcyRjCzh0AhLMdgcTPrC7++QcAT1Ql+a7BLhJAvILIQgjHZbYgoQisqIxIQp0X0+bkVBS4h4ooibz8/cyhiKFiIpbE5USNauMKCFMAuGorE/RawsBB1jKiWjnuTwULmSEdeUyX51AesRNLSK9LSdtewIUmwhKYSHTF6WGmlozKUIpY8ykolKImUAC5aV8JKKSwekKaJXYzgbVgYA9KmthglYGaRMomZ6027YAcjHLiHCTQ/cO5+C0xyYe7HgyHAJCcWDDw0DSZxWWjyRIEZsETB01YCtBpWsh7YsbTFk+gbytUeVo6qhGZJlKf0s26I9MhhN/rMU7p8wVxg4SpeMNbr7gSRWrzurJfvRUNEX+TLVy4FRiQueClgK0ycHFZKhxUmtjKpwQgdK5NsRdsq+SFrjTuSmBVt1hIy/J7H+xSwePueJRpkuGqsoO0OfZmnpj1cbyd3aE2am/69Gytoaf9seb0fuNtzxf7pHzw9Xn8Ivf4se/2R+FefrK8/oF9/zv+H5sLLrQ7eeAkVmyNsWeNlZhuoURty4q5hbaB5xKHQlFqH8/2ct8iS3J1qkf0CRVzU1V96oY0AAAAASUVORK5CYII="}/>
                    <img className={"bottom-img2"} src={"https://m.juooo.com/static/img/weibo.f5b598c.png"}/>
                </div>
            </div>
        )
    }
}