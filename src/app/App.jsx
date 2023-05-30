import './App.css';
import Comment from './components/Comment/Comment';
import comments from './data';
import user from './user.json';
import DeleteIcon from '../images/icons/icon-delete.svg';
import EditIcon from '../images/icons/icon-edit.svg';
import MinusIcon from '../images/icons/icon-minus.svg';
import PlusIcon from '../images/icons/icon-plus.svg';
import ReplyIcon from '../images/icons/icon-reply.svg';

import AmyRobinsonAvatar from '../images/avatars/image-amyrobson.png';
import JuliusMomoAvatar from '../images/avatars/image-juliusomo.png';
import MaxBlagunAvatar from '../images/avatars/image-maxblagun.png';
import RamsesMironAvatar from '../images/avatars/image-ramsesmiron.png';

import React, { useState } from 'react';
// import { v4 as uuid } from 'uuid';

function App() {
	// const unique_id = uuid();
	// console.log(comments);
	// console.log(user);
	const [rating, setRating] = useState('2');
	// const ids = [uuid(), uuid(), uuid()];

	const increaseRating = (id) => {
		console.log(id);

		// event.currentTarget

		// console.log('parent: ', parent);
		// setRating(rating + 1);
		// console.log('Increased by one');
	};

	const decreaseRating = (id) => {
		console.log(id);
		// setRating(rating - 1);
		console.log('Decreased by one');
	};

	return (
		<div className="App">
			{/* First comment */}
			{comments.map((comment, key) => {
				return (
					<Comment
						key={key}
						rating={rating}
						id={comment.id}
						avatar={comment.author.image}
						userName={comment.author.name}
						userDate={comment.author.date}
						userComment={comment.content}
					/>
				);
			})}

			<div className="reply">
				<hr className="reply-divider" />
				<div className="comment">
					<div className="rating" id="5">
						<button onClick={() => increaseRating()}>
							<img src={PlusIcon} alt="Plus icon" className="plus-icon icon" />
						</button>

						<p>{rating}</p>
						<button onClick={() => decreaseRating()}>
							<img
								src={MinusIcon}
								alt="Minus icon"
								className="minus-icon icon"
							/>
						</button>
					</div>
					<div className="comment-content">
						<div className="user-info">
							<div className="user">
								<img src={RamsesMironAvatar} alt="Ramses Miron Avatar" />
								<p className="user-name">ramsesmiron</p>
								<p className="user-date">1 weeks ago</p>
							</div>
							<div className="reply-btn">
								<button>
									<img src={ReplyIcon} alt="Reply icon" />
									Reply
								</button>
							</div>
						</div>
						<p className="users-comment">
							Woah, your project looks awesome! How long have you been coding
							for? I'm still new, but think I want to dive into React as well
							soon. Perhaps you can give me an insight on where I can learn
							React? Thanks!
						</p>

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

			{/* Add comment */}
			<div className="add-comment">
				<img
					src={JuliusMomoAvatar}
					alt="Julius Momo Avatar"
					className="commenter-avatar hide"
				/>
				<textarea placeholder="Add a comment..."></textarea>
				<div className="send-btn">
					{/* Displaying img when width is 375px */}
					<img
						src={JuliusMomoAvatar}
						alt="Julius Momo Avatar"
						className="commenter-avatar show"
					/>
					<button>Send</button>
				</div>
			</div>

			<div className="modal">
				<div className="delete-card">
					<p className="modal-header">Delete comment</p>
					<p className="modal-paragraph">
						Are you sure you want to delete this comment? This will remove the
						comment and can't be undone.
					</p>
					<div className="delete-card-buttons">
						<button>No, cancel</button>
						<button>Yes, delete</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
