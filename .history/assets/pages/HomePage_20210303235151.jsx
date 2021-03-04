import React from 'react'

export default function Recipes({ recipes }) {
  return (
    <div className="divide-y divide-gray-100">
      <NavbarTop>
        <NavItem href="/featured" isActive>Featured</NavItem>
        <NavItem href="/popular">Popular</NavItem>
        <NavItem href="/recent">Recent</NavItem>
      </NavbarTop>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>
    </div>
  )
}