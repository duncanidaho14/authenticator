import React from 'react'
import NavbarTop from './../components/NavbarTop'
import NavItem from './../components/NavItem'
import List from './../components/List'
import ListItem from './../components/ListItem'
// import recipes from './../services/Recipes'
const recipes = [
    {'id': 0} ,
    {'title': 'image1'},
    {'time': '1h00'},
    {'difficulty': 5},
    {'servings': 'servings'},
    {'author': 'duncan'},
    {'rating': 5}
];
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