// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy datat when ready to test.

var Application = React.createClass({
    render: function(){
        return(
            <Comment />
        )
    }
})

function Comment(props) {
    return(
        <div className="Comment">
            <UserInfo />
            <CommentBody />
            <Badges />
        </div>
    );
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar />
            <div className="UserInfo-name">
                userinfo area
            </div>
        </div>
    )
}

function Avatar(props){
    return(
        <img className="Avatar"
            src= "https://cdn2-5.cdn.schoology.com/system/files/imagecache/profile_reg/courselogos/logo-744446355_57f2816ecaa43.jpg?1475510639"
        />
    )
}

function CommentBody(props){
    return(
        <div className="Comment-body">
            <h1>Comment body heading</h1>
            <div className="Comment-text">comment text</div>
            <div className="Comment-date">
                comment date
            </div>
        </div>
    )
}

function Badges(props){
    return(
        <div className="UserBadges">
            <div className="badge">user badge 1</div>
            <div className="badge">user badge 2</div>
            <div className="badge">user badge 3</div>
        </div>
    )
}

ReactDOM.render(
    <Application />,
    document.getElementById('container')
)






