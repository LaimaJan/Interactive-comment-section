import MinusIcon from '../../../../public/images/icons/icon-minus.svg';
import PlusIcon from '../../../../public/images/icons/icon-plus.svg';
import ReplyIcon from '../../../../public/images/icons/icon-reply.svg';

import Reply from '../Reply/Reply';

import JuliusComments from '../JuliusComments/JuliusComents';

import { useState } from 'react';

export default function Comment({
	rating,
	id,
	avatar,
	userName,
	userDate,
	userComment,
	mapDataReply,
}) {
	const [repliedToComment, setRepliedToComment] = useState('');
	const [showReplyToComment, setShowReplyToComment] = useState(false);
	const pressedReplyButton = () => {
		setShowReplyToComment(true);
		console.log('you clicked me');
	};

	return (
		<>
			<div className="comment">
				<div className="rating" id={id}>
					<button onClick={() => increaseRating(id)}>
						<img src={PlusIcon} alt="Plus icon" className="plus-icon icon" />
					</button>

					<p>{rating}</p>
					<button onClick={() => decreaseRating(id)}>
						<img src={MinusIcon} alt="Minus icon" className="minus-icon icon" />
					</button>
				</div>
				<div className="comment-content">
					<div className="user-info">
						<div className="user">
							<img src={avatar} alt={userName} />
							<p className="user-name">{userName}</p>
							<p className="user-date">{userDate}</p>
						</div>
						<div className="reply-btn show">
							<button onClick={() => pressedReplyButton()}>
								<img src={ReplyIcon} alt="Reply icon" />
								Reply
							</button>
						</div>
					</div>
					<p className="users-comment">{userComment}</p>

					{/* Displaying when width is 375px */}
					<div className="comment-info">
						<div className="comment-info-content">
							<div className="comment-rating" id="2">
								<button>
									<img
										src={PlusIcon}
										alt="Plus icon"
										className="plus-icon icon"
									/>
								</button>

								<p>{rating}</p>
								<button>
									<img
										src={MinusIcon}
										alt="Minus icon"
										className="minus-icon icon"
									/>
								</button>
							</div>
							<div className="comment-reply-btn">
								<button>
									<img src={ReplyIcon} alt="Reply icon" />
									Reply
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Reply */}
			{mapDataReply.replies &&
				mapDataReply.replies.map((reply) => (
					<Reply
						key={reply.id}
						rating={reply.rating}
						id={reply.id}
						avatar={reply.author.image}
						userName={reply.author.name}
						userDate={reply.author.date}
						userComment={reply.content}
					/>
				))}

			{showReplyToComment ? <Reply /> : ''}

			{/*  Julius replies with a comment*/}
			{/* <JuliusComments /> */}
		</>
	);
}
