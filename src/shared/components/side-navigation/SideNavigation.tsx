import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.style.css';

export const SideNavigation = () => {
	const navItems: Array<NavItemProps> = [
		{
			to: '/',
			label: 'Acceuil',
			icon: 'home',
		},
		{
			to: '/classes',
			label: 'Salles de classe',
			icon: 'wallet',
		},
		{
			to: '/teachers',
			label: 'Enseignants',
			icon: 'tasks',
		},
		{
			to: '/reports',
			label: 'Rapport',
			icon: 'tasks',
		},
	];
	return (
		<nav>
			<ul>
				<NavItem
					className="logo"
					label={
						<b style={{fontSize: '1.8rem'}}>
							CLASS SYNC
						</b>
					}
					to="/"
				/>
				{navItems.map((item, index) => (
					<NavItem
						key={index}
						icon={item.icon}
						label={item.label}
						to={item.to}
					/>
				))}
			</ul>
		</nav>
	);
};

type NavItemProps = {
	to: string;
	label: React.ReactNode;
	icon?: string;
	logo?: string;
	className?: string;
};

const NavItem = (props: NavItemProps): React.JSX.Element => {
	const clsName = props.className ? props.className : '';
	return (
		<li>
			<NavLink
				to={props.to}
				className={({isActive}) =>
					isActive ? `active ${clsName}` : ` ${clsName}`
				}
			>
				<>
					{props.icon && <i className={`fas fa-${(props.icon)}`}></i>}
					<span className="nav-item">{props.label}</span>
				</>
			</NavLink>
		</li>
	);
};
