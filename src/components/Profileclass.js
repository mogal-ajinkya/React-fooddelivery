import React from "react";
const username = "akshaymarch7";
class ProfileInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props.name + " child -- constructor");
        this.state = {
            userinfo : {
                name : "dummy name",
                followers : 0,
                following : 0,
            },
        }
    }

    async componentDidMount()
    {
        console.log(this.props.name + " child -- Mount" );
        const data = await fetch('https://api.github.com/users/' + username) ;
        const json = await data.json();
        console.log(json);
        this.setState ({
            // userinfo  :{
            //     name : json.name,
            //     followers : json.followers,
            //     following : json.following,
            // }
        userinfo : json,
        });
        // console.log(this.state.userinfo);
    }
    render()
    {
        const {count} = this.state;
        console.log(this.props.name +" child -- render");
        // return <div>
        //     <h1>this is h1</h1>
        //     <h2>this is h2</h2>
        //     <h2>Name : {this.props.name}</h2>
        //     <h2>count : {count}</h2>
        //     <button onClick={ ()=>
        //     {
        //         this.setState({
        //             count : count + 1,
        //         })
        //     }}>click</button>
        // </div>


        return <div>
            <h1>name : {this.state.userinfo.name}</h1>
            <h1>followers : {this.state.userinfo.followers}</h1>
            <h1>following : {this.state.userinfo.following}</h1>
            </div>

        
    }
}

export default ProfileInfo;