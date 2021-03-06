import { Container, SiteName } from 'components/atoms'
import { NavItems } from 'components/organisms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const Navbar = ({ white, section, underlineColor }) => {
	// TODO: Add custom nav items for events page
	// const navItems = ['agenda', 'blueprints', 'dashboard', 'team', 'venue']

	// {navItems.map(item => (
	// 	<Heading key={`heading_${item}`} level={4} className={styles.entryLabel}>
	// 		<a href={`#${item}`}>{item}</a>
	// 	</Heading>
	// ))}

	return (
		<Container>
			<nav className={white ? styles.white : styles.default}>
				<SiteName underlineColor={underlineColor} section={section} />

				<NavItems />
			</nav>
		</Container>
	)
}

Navbar.propTypes = {
	href: PropTypes.string,
	selected: PropTypes.string,
	underlineColor: PropTypes.string,
}

export default Navbar
