import MinusIcon from '../../../../public/images/icons/icon-minus.svg';
import PlusIcon from '../../../../public/images/icons/icon-plus.svg';
import DeleteIcon from '../../../../public/images/icons/icon-delete.svg';
import EditIcon from '../../../../public/images/icons/icon-edit.svg';
import './JuliusComments.css';

import React, { useState } from 'react';

export default function JuliusComments({
	rating,
	id,
	avatar,
	userName,
	userDate,
	userComment,
	deleteJuliusComment,
	updateJuliusComment,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedComment, setEditedComment] = useState(userComment);

	const handleSave = () => {
		setIsEditing(false);
		updateJuliusComment(id, editedComment);
	};

	return (
		<div className="julius-comment" id={id}>
			{/* <hr className="reply-divider" /> */}
			<div className="comment">
				<div className="rating">
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

							<span className="you-badge">you</span>
							<p className="user-date">{userDate}</p>
						</div>
						<div className="btn-container">
							<div className="delete-btn">
								<button onClick={deleteJuliusComment}>
									<img src={DeleteIcon} alt="Delete icon" />
									Delete
								</button>
							</div>
							<div className="edit-btn">
								<button onClick={() => setIsEditing(true)}>
									<img src={EditIcon} alt="Edit icon" />
									Edit
								</button>
							</div>
						</div>
					</div>
					{isEditing ? (
						<textarea
							value={editedComment}
							onChange={(e) => setEditedComment(e.target.value)}
						/>
					) : (
						<p className="users-comment">{userComment}</p>
					)}
					{isEditing && (
						<div className="save-btn">
							<button onClick={handleSave}>Update</button>
						</div>
					)}

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
							<div className="comment-delete-edit-container">
								<button>
									<img src={DeleteIcon} alt="Delete icon" />
									Delete
								</button>
								<button>
									<img src={EditIcon} alt="Edit icon" />
									Edit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
