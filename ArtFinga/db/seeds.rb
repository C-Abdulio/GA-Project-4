# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artwork.destroy_all
User.destroy_all #This refreshes db when restarting rails


users = User.create([ #this posts a new user (or a bulk of users)
  {
    name: 'aCa',
    password: 'aaaa'
  },
  {
    name: 'b@b.co',
    password: 'bbbb'
  },
  {
    name: 'c@c.co',
    password: 'cccc'
  }
])

users[0].artworks.create(
  title: 'kirby',
img_url: 'https://s3.us-east-2.amazonaws.com/active-storage-artfinga-images/canvastestpic.png'
)
users[1].artworks.create(
  title: 'Phaser',
  img_url: 'http://phaser.io/content/tutorials/making-your-first-phaser-3-game/tutorial_header.png'
)
artwork1 = Artwork.create(
  title: 'bloohbloghlogf',
img_url: 'https://i.4cdn.org/co/1546198971801.png'
)
users[2].artworks << artwork1

# artworks = Artwork.create([
#   {
#     title: 'kirby',
#     img_url: 'https://s3.us-east-2.amazonaws.com/active-storage-artfinga-images/canvastestpic.png'
#
#   },
#   {
#     title: 'Phaser',
#     img_url: 'http://phaser.io/content/tutorials/making-your-first-phaser-3-game/tutorial_header.png'
#   },
#   {
#     title: 'bloohbloghlogf',
#     img_url: 'https://i.4cdn.org/co/1546198971801.png'
#   }
# ])
