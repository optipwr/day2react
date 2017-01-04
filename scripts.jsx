// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy datat when ready to test.

var people = [
    {
        author: {
            name: "Book Man",
            avatarURL: "https://leighevans.files.wordpress.com/2011/09/man-reading-book.jpg"
        },
        commentHeading: "Book Man Header",
        text: "Book Man Text Body",
        date: new Date(),
        userBadge: ['BookManBadge1', 'BookManBadge2', 'BookManBadge3']

    }
]

function formatDate(date){
    getDate(date)
}

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
                {props.author.name}
            </div>
        </div>
    )
}

function Avatar(props){
    return(
        <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
    )
}

function CommentBody(props){
    return(
        <div className="Comment-body">
            <h1>{props.commentHeading}</h1>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

function Badges(props){
    return(
        <div className="UserBadges">
            <div className="badge">{props.userBadge[0]}</div>
            <div className="badge">{props.userBadge[1]}</div>
            <div className="badge">{props.userBadge[2]}</div>
        </div>
    )
}

ReactDOM.render(
    <Application props={people} />,
    document.getElementById('container')
)






