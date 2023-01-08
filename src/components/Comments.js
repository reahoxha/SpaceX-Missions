import { useEffect, useState } from "react"
import {getComments as getCommentsApi, 
        createComment as createCommentApi,
        deleteComment as deleteCommentApi} from "../api"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

export const Comments = ({launch, currentUserId}) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments=backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = commentId => {
    return backendComments.filter(backendComment => backendComment.parentId === commentId)
    .sort(
      (a,b) => 
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };


  const addComment = (text, parentId) => {
    console.log('addComment', text, parentId);
    createCommentApi(text, parentId).then((comment) => {
        setBackendComments([comment, ...backendComments]);
        setActiveComment(null);
    })
  };

  const deleteComment = (commentId) => {
     if(window.confirm("Are you sure that you want to delete the comment? ")){
      deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
     }
  }


  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

return(
<div className="modal fade" id={`popup${launch.mission_name}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Comment Section for {launch.mission_name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="comments">
        <h4 className="comments-title">All the comments</h4>
        <div className="comment-form-title">Write comment</div>
        <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="comments-container">
               {rootComments.map((rootComment)=> (
                <Comment 
                key={rootComment.id}
                comment={rootComment}
                replies={getReplies(rootComment.id)}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                />
               ))}
            </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
);
};

export default Comments;