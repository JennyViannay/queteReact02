import React, { Component } from 'react';
import Users from './Users';


const	items = [
	{
			name: 'Elijah Gonzalez',
			avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
			status: true 
		},
		{
			name: 'Aubrey Barnett',
			avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
			status: false
		},
		{
			name: 'Clinton Hayes',
			avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
			status: true
		},
		{
			name: 'Miriam Webb',
			avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
			status: false
		},
		{
			name: 'Wayne Rose', 
			avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
			status: true 
		}
]

export default class ContactList extends Component {
		render() {
			return (
				<>
				 {items.map(item => (
				 <Users 
						 name = {item.name}
						 avatar = {item.avatar}
						 status = {item.status}
				 />
				))} 
			</>
			)
			
		}		
		
}
