import CommentForm from "./CommentForm";

const Comment = ({comment, replies, currentUserId, deleteComment, activeComment,addComment, setActiveComment, parentId=null}) => {
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const isReplying = 
    activeComment && 
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;
    return(
        <div className="comment">
            <div className="comment-image-container">
                <img src="user.jpg" alt="images"/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{createdAt}</div>
                </div>
                <div className="comment-text">{comment.body}</div>
                <div className="comment-actions">
                    {canReply && (
                        <div
                            className="comment-action"
                            onClick={() =>
                                setActiveComment({ id: comment.id, type: "replying" })
                            }
                        >
                          Reply
                        </div>
                    )}
                    {canDelete && (
                        <div
                            className="comment-action"
                            onClick={() => deleteComment(comment.id)}
                        >
                          Delete
                        </div>
                    )}
                </div>
                {isReplying && (
                <CommentForm 
                    submitLabel="Reply" 
                    handleSubmit={(text) => addComment(text, replyId)}
                />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                       {replies.map((reply) => (
                        <Comment 
                        comment ={reply} 
                        key={reply.id}
                        replies={[]} 
                        currentUserId={currentUserId}
                        deleteComment={deleteComment}
                        addComment={addComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        parentId={comment.id}
                        />
                     ))} 
                 </div>
                )}
            </div>
        </div>
    );
};

export default Comment;