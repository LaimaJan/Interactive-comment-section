import MinusIcon from '../../../images/icons/icon-minus.svg';
import PlusIcon from '../../../images/icons/icon-plus.svg';
import ReplyIcon from '../../../images/icons/icon-reply.svg';

export default function Reply({
	rating,
	id,
	avatar,
	userName,
	userDate,
	userComment,
}) {
	return (
		<div className="reply">
			<hr className="reply-divider" />
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
							<img src={avatar} alt={avatar} />
							<p className="user-name">{userName}</p>
							<p className="user-date">{userDate}</p>
						</div>
						<div className="reply-btn">
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
							<div className="comment-rating" id="6">
								<button>
									<img
										src={PlusIcon}
										alt="Plus icon"
										className="plus-icon icon"
									/>
								</button>

								<p>12</p>
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
		</div>
	);
}
