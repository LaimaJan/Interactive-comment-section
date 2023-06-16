import './Comment.css';
import CommentsForm from '../CommentForm/CommentsForm';
import ReplyButton from '../../../../public/images/icons/icon-reply.svg';
import PlusButton from '../../../../public/images/icons/icon-plus.svg';
import MinusButton from '../../../../public/images/icons/icon-minus.svg';
import { useState } from 'react';

function Comment({ comment, replies, addComment, parentId = null }) {
	const replyId = parentId ? parentId : comment.id;

	const [isReplying, setIsReplying] = useState(false);

	const replyingToComment = () => {
		setIsReplying(true);
	};

	return (
		<>
			<div className="comment-box">
				<div className="rating-container show">
					<img src={PlusButton} alt={`Plus icon`} />
					<p>0</p>
					<img src={MinusButton} alt={`Minus icon`} />
				</div>
				<div className="comment-content">
					<div className="comment-content-user-info">
						<div className="user-info">
							<img src={comment.image} alt={`${comment.username} image`} />
							<p className="comment-username">{comment.username}</p>
							<p className="comment-creation-date">{comment.date}</p>
						</div>

						<div
							className="comment-action reply-btn show"
							onClick={replyingToComment}
						>
							<img src={ReplyButton} />
							<p>Reply</p>
						</div>
					</div>
					<p className="comment">{comment.comment}</p>

					{/* width is 375px and smaller */}
					<div className="rating-reply-btn-container display">
						<div className="rating-container ">
							<img src={PlusButton} alt={`Plus icon`} />
							<p>0</p>
							<img src={MinusButton} alt={`Minus icon`} />
						</div>
						<div className="comment-action reply-btn ">
							<img src={ReplyButton} />
							<p>Reply</p>
						</div>
					</div>
				</div>
			</div>
			{isReplying && (
				<CommentsForm
					submitLabel="REPLY"
					handleSubmit={(text) => addComment(text, replyId)}
				/>
			)}

			{replies && replies.length > 0 && (
				<div className="replies">
					{replies.map((reply) => {
						return <Comment key={reply.id} comment={reply} replies={[]} />;
					})}
				</div>
			)}
		</>
	);
}

export default Comment;
