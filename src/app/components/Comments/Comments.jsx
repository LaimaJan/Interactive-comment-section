import './Comments.css';
import CommentsForm from '../CommentForm/CommentsForm';
import Comment from '../Comment/Comment';
import { getComments as getCommentsApi, createComment } from '../../../data';
import { useState, useEffect } from 'react';

function Comments({ currentUserId }) {
	const [backendComments, setBackendComments] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [deleteComment, setDeleteComment] = useState(false);
	const [commentToDeleteId, setCommentToDeleteId] = useState(null);

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

	const closeModal = () => {
		setShowModal(false);
		setDeleteComment(false);
	};

	const confirmModalDelete = () => {
		setDeleteComment(true);

		if (deleteComment) {
			deleteJuliusComment();
		}
	};

	const commentModalDelete = (commentId) => {
		setShowModal(true);
		setCommentToDeleteId(commentId);
	};

	const deleteJuliusComment = () => {
		setShowModal(false);
		const updatedComments = backendComments.filter(
			(backendComment) => backendComment.id !== commentToDeleteId
		);
		console.log('updatedcomments: ', updatedComments);
		setBackendComments(updatedComments);
		setDeleteComment(false);
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
		if (deleteComment && showModal) {
			deleteJuliusComment();
		}
	}, [deleteComment, showModal]);

	useEffect(() => {
		getCommentsApi().then((data) => {
			setBackendComments(data);
		});
	}, [deleteComment]);

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
							commentModalDelete={commentModalDelete}
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
			{showModal && (
				<div className="modal">
					<div className="modal-content">
						<div className="text-container">
							<p className="modal-header">Delete comment</p>
							<p className="modal-text">
								Are you sure you want to delete this comment? This will remove
								the comment and can't be undone.
							</p>
						</div>
						<div className="button-container">
							<button onClick={closeModal}>NO, CANCEL</button>
							<button onClick={confirmModalDelete}>YES, DELETE</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Comments;
