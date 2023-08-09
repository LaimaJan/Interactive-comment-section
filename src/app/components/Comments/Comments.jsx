import './Comments.css';
import CommentsForm from '../CommentForm/CommentsForm';
import Comment from '../Comment/Comment';
import { getComments as getCommentsApi, createComment } from '../../../data';
import { useState, useEffect } from 'react';

function Comments({ currentUserId }) {
	const [backendComments, setBackendComments] = useState([]);

	console.log('Backend comments');
	console.log(backendComments);

	const parentComment = backendComments.filter(
		(backendComment) => backendComment.parentId === null
	);

	const getReplies = (commentId) => {
		const replies = backendComments.filter(
			(backendComment) => backendComment.parentId === commentId
		);

		return replies;
	};

	const addComment = (text, parentId) => {
		createComment(text, parentId).then((comment) => {
			setBackendComments([comment, ...backendComments]);
		});
	};

	const addJuliusComment = (text, parentId) => {
		createComment(text, parentId).then((comment) => {
			setBackendComments([...backendComments, comment]);
		});
	};

	const deleteJuliusComment = (id) => {
		const updatedComments = backendComments.filter(
			(backendComment) => backendComment.id !== id
		);
		console.log('updatedcomments: ', updatedComments);
		setBackendComments(updatedComments);
	};

	const editJuliusComment = (editedText, commentId) => {
		const editedCommentIndex = backendComments.findIndex(
			(comment) => comment.id === commentId
		);

		if (editedCommentIndex !== -1) {
			const editedComment = {
				...backendComments[editedCommentIndex],
				comment: editedText,
			};

			const updatedComments = [
				...backendComments.slice(0, editedCommentIndex),
				editedComment,
				...backendComments.slice(editedCommentIndex + 1),
			];

			setBackendComments(updatedComments);
		}
	};

	const increaseDecreaseCommentRating = (commentId, action) => {
		const updatedComments = backendComments.map((comment) => {
			if (comment.id === commentId) {
				return {
					...comment,
					rating:
						action === 'increase' ? comment.rating + 1 : comment.rating - 1,
				};
			}
			return comment;
		});
		setBackendComments(updatedComments);
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
							getReplies={getReplies}
							addComment={addComment}
							deleteJuliusComment={deleteJuliusComment}
							editJuliusComment={editJuliusComment}
							increaseDecreaseCommentRating={increaseDecreaseCommentRating}
						/>
					);
				})}
			</div>
			<div className="comments-form-container">
				<CommentsForm
					handleSubmit={addJuliusComment}
					submitLabel={'SEND'}
					juliusWritesComment={'Add a comment ...'}
				/>
			</div>
		</div>
	);
}

export default Comments;
