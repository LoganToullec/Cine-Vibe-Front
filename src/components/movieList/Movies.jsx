import Nav from './Nav.js'
import NavItem from './NavItem.js'
import List from './List.jsx'
import ListItem from './ListItem.jsx'

export default function Movies({ movies }) {
  return (
    <div className="divide-y divide-slate-100 w-screen">
      <Nav>
        <NavItem href="/new" isActive>New Releases</NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </Nav>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  )
}