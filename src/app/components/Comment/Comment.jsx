import './Comment.css';
import CommentsForm from '../CommentForm/CommentsForm';
import ReplyButton from '../../../../public/images/icons/icon-reply.svg';
import PlusButton from '../../../../public/images/icons/icon-plus.svg';
import MinusButton from '../../../../public/images/icons/icon-minus.svg';
import DeleteButton from '../../../../public/images/icons/icon-delete.svg';
import EditButton from '../../../../public/images/icons/icon-edit.svg';
import { useState } from 'react';

function Comment({
	comment,
	getReplies,
	addComment,
	parentId = null,
	deleteJuliusComment,
	editJuliusComment,
	increaseDecreaseCommentRating,
}) {
	const replyId = parentId ? parentId : comment.id;
	const replies = getReplies(comment.id);

	const [isReplying, setIsReplying] = useState(false);

	const [isEditing, setIsEditing] = useState(false);
	const [editedText, setEditedText] = useState(comment.comment);
	const [commentRating, setCommentRating] = useState(comment.rating);
	const [commentId, setCommentId] = useState(null);
	const [action, setAction] = useState(null);

	const replyingToComment = () => {
		setIsReplying(!isReplying);
	};

	const toggleEditing = () => {
		setIsEditing(!isEditing);
	};

	const handleRatingChange = (action) => {
		setCommentId(comment.id);
		setAction(action);
		increaseDecreaseCommentRating(comment.id, action);
	};

	const isJuliusComment = comment.username === 'juliusmomo';

	return (
		<>
			<div className={`comment-box ${isJuliusComment ? 'julius-comment' : ''}`}>
				<div className="rating-container show">
					<img
						src={PlusButton}
						alt={`Plus icon`}
						onClick={() => handleRatingChange('increase')}
					/>
					<p>{commentRating}</p>
					<img
						src={MinusButton}
						alt={`Minus icon`}
						onClick={() => handleRatingChange('decrease')}
					/>
				</div>
				<div className="comment-content">
					<div className="comment-content-user-info">
						<div className="user-info">
							<img src={comment.image} alt={`${comment.username} image`} />

							<p className="comment-username">{comment.username}</p>
							{isJuliusComment ? (
								<div className="julius-badge">
									<p>you</p>
								</div>
							) : (
								''
							)}
							<p className="comment-creation-date">{comment.date}</p>
						</div>
						{isJuliusComment ? (
							<div className="comment-action edit-delete-btn show">
								<div
									className="delete-btn"
									onClick={() => deleteJuliusComment(comment.id)}
								>
									<img src={DeleteButton} />
									<p>Delete</p>
								</div>

								<div className="edit-btn" onClick={toggleEditing}>
									<img src={EditButton} />
									<p>Edit</p>
								</div>
							</div>
						) : (
							<div
								className="comment-action reply-btn show"
								onClick={replyingToComment}
							>
								<img src={ReplyButton} />
								<p>Reply</p>
							</div>
						)}
					</div>
					{isEditing ? (
						<>
							<textarea
								className="edit-comment-textarea"
								value={editedText}
								onChange={(e) => setEditedText(e.target.value)}
							/>
							<div className="update-btn-container">
								<button
									onClick={() => {
										editJuliusComment(editedText, comment.id);
										setIsEditing(false);
									}}
								>
									UPDATE
								</button>
							</div>
						</>
					) : (
						<p className="comment">{comment.comment}</p>
					)}

					{/* width is 375px and smaller */}
					<div className="rating-reply-btn-container display">
						<div className="rating-container ">
							<img src={PlusButton} alt={`Plus icon`} />
							<p>0</p>
							<img src={MinusButton} alt={`Minus icon`} />
						</div>
						<div
							className="comment-action reply-btn"
							onClick={replyingToComment}
						>
							<img src={ReplyButton} />
							<p>Reply</p>
						</div>
					</div>
				</div>
			</div>
			{isReplying && (
				<CommentsForm
					submitLabel="REPLY"
					handleSubmit={(text) => {
						addComment(text, replyId);
						setIsReplying(false);
					}}
				/>
			)}

			{replies && replies.length > 0 && (
				<div className="replies">
					{replies.map((reply) => {
						// console.log('replies: ', replies);
						console.log('Reply', reply);
						return (
							<Comment
								key={reply.id}
								comment={reply}
								getReplies={getReplies}
								increaseDecreaseCommentRating={increaseDecreaseCommentRating}
								addComment={addComment}
								// deleteJuliusComment={deleteJuliusComment}
								// editJuliusComment={editJuliusComment}
							/>
						);
					})}
				</div>
			)}
		</>
	);
}

export default Comment;
