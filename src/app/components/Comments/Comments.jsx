import './Comments.css';
import CommentsForm from '../CommentForm/CommentsForm';
import Comment from '../Comment/Comment';
import { getComments as getCommentsApi, createComment } from '../../../data';
import { useState, useEffect } from 'react';

function Comments({ currentUserId }) {
	const [backendComments, setBackendComments] = useState([]);

	console.log(backendComments);

	const parentComment = backendComments.filter(
		(backendComment) => backendComment.parentId === null
	);

	const getReplies = (commentId) => {
		return backendComments.filter(
			(backendComment) => backendComment.parentId === commentId
		);
	};

	const addComment = (text, parentId) => {
		createComment(text, parentId).then((comment) => {
			setBackendComments([...backendComments, comment]);
		});
	};

	useEffect(() => {
		getCommentsApi().then((data) => {
			setBackendComments(data);
		});
	}, []);

	return (
		<div className="comments">
			<div className="comments-container">
				{parentComment.map((comment) => {
					return (
						<Comment
							key={comment.id}
							comment={comment}
							replies={getReplies(comment.id)}
							addComment={addComment}
						/>
					);
				})}
			</div>
			<div className="comments-form-container">
				<CommentsForm handleSubmit={addComment} submitLabel={'Write'} />
			</div>
		</div>
	);
}

export default Comments;
