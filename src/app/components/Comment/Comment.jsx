import MinusIcon from '../../../images/icons/icon-minus.svg';
import PlusIcon from '../../../images/icons/icon-plus.svg';
import ReplyIcon from '../../../images/icons/icon-reply.svg';
import data from '../../data.json';

import Reply from '../Reply/Reply';

export default function Comment({
	rating,
	id,
	avatar,
	userName,
	userDate,
	userComment,
	replyRating,
	replyId,
	replyAvatar,
	replyUserName,
	replyUserDate,
	replyUserComment,
}) {
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
							<img src={avatar} alt="Amy Robinson Avatar" />
							<p className="user-name">{userName}</p>
							<p className="user-date">{userDate}</p>
						</div>
						<div className="reply-btn show">
							<button>
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

			<Reply
				rating={replyRating}
				id={replyId}
				avatar={replyAvatar}
				userName={replyUserName}
				userDate={replyUserDate}
				userComment={replyUserComment}
			/>
		</>
	);
}
