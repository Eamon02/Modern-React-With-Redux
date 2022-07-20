import React from 'react';

function CommentDetail(props) {
	return (
		<div className='ui container comments'>
			<div className='comment'>
				<a href='/' className='avatar'>
					<img alt='avatar' src={props.icon} />
				</a>
				<div className='content'>
					<a href='/' className='author'>
						{props.author}
					</a>
					<div className='metadata'>
						<span className='date'>
							Today at {props.postTime}PM
						</span>
					</div>
					<div className='text'>{props.commentText}</div>
				</div>
			</div>
		</div>
	);
}

export default CommentDetail;
