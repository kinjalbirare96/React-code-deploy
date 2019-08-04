import React from 'react';
function CommentList(props) {
    return (
        <ul>
            {props.commentData.map(commentItem => (
                    <li>{commentItem}</li>
            ))}
        </ul>
    );
}
export default CommentList;
  