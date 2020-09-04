# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
State.destroy_all
Climb.destroy_all
Review.destroy_all
Photo.destroy_all

user1 = User.create!(email: 'admin@email.com', username: 'admin',password: '12345')
user2 = User.create!(email: 'admin2@email.com', username: 'admin2',password: '12345')

state1 = State.create!(state: 'AK')
state2 = State.create!(state: 'HI')
state3 = State.create!(state: 'AL')
state4 = State.create!(state: 'AR')
state5 = State.create!(state: 'AZ')
state6 = State.create!(state: 'CA')
state7 = State.create!(state: 'CO')
state8 = State.create!(state: 'CT')
state9 = State.create!(state: 'DE')
state10 = State.create!(state: 'FL')
state11 = State.create!(state: 'GA')
state12 = State.create!(state: 'IA')
state13 = State.create!(state: 'ID')
state14 = State.create!(state: 'IL')
state15 = State.create!(state: 'IN')
state16 = State.create!(state: 'KS')
state17 = State.create!(state: 'KY')
state18 = State.create!(state: 'LA')
state19 = State.create!(state: 'MA')
state20 = State.create!(state: 'MD')
state21 = State.create!(state: 'ME')
state22 = State.create!(state: 'MI')
state23 = State.create!(state: 'MN')
state24 = State.create!(state: 'MO')
state25 = State.create!(state: 'MS')
state26 = State.create!(state: 'MT')
state27 = State.create!(state: 'NC')
state28 = State.create!(state: 'ND')
state29 = State.create!(state: 'NE')
state30 = State.create!(state: 'NH')
state31 = State.create!(state: 'NJ')
state32 = State.create!(state: 'NM')
state33 = State.create!(state: 'NV')
state34 = State.create!(state: 'NY')
state35 = State.create!(state: 'OH')
state36 = State.create!(state: 'OK')
state37 = State.create!(state: 'OR')
state38 = State.create!(state: 'PA')
state39 = State.create!(state: 'RI')
state40 = State.create!(state: 'SC')
state41 = State.create!(state: 'SD')
state42 = State.create!(state: 'TN')
state43 = State.create!(state: 'TX')
state44 = State.create!(state: 'VA')
state45 = State.create!(state: 'VT')
state46 = State.create!(state: 'WA')
state47 = State.create!(state: 'WI')
state48 = State.create!(state: 'WV')
state49 = State.create!(state: 'WY')








climb1 = Climb.create!(climb_name: 'Son of Easy-0',img_url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',type_of_climb: 'Trad', location: 'Gunks',state: state1)
climb2 = Climb.create!(climb_name: 'CCK',img_url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',type_of_climb: 'Sport', location: 'Gunks',state: state1)
climb3 = Climb.create!(climb_name: 'Ragnarock',img_url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',type_of_climb: 'Trad', location: 'Smugglers Notch',state: state2)
climb4 = Climb.create!(climb_name: 'Pac-Man',img_url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',type_of_climb: 'Sport', location: 'Bolton',state: state2)

review1 = Review.create!(review:'Amazing Climb!!',rating: 4, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb: climb1, user: user1)
review2 = Review.create!(review:'So much fun.Its a great climb!!',rating: 2, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb: climb2, user: user1)
review3 = Review.create!(review:'Love climbing!!',rating: 3, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb: climb3, user: user2)
review4 = Review.create!(review:'So much fun.Its a great climb!!',rating: 4, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb: climb4, user: user2)
review5 = Review.create!(review:'Awful!!',rating: 1, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb: climb1, user: user2)
review6 = Review.create!(review:'meh!!',rating: 2, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb: climb2, user: user2)
review7 = Review.create!(review:'So much fun.Its a great climb!!',rating: 2, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb: climb2, user: user1)

# review5 = Review.create!(review:'Awful!!',rating: 1, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb_id: climb1, user_id: user2)
# review6 = Review.create!(review:'meh!!',rating: 2, img_url:'https://images.unsplash.com/photo-1516372048654-2e06f99e1382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',climb_id: climb2, user_id: user2)


Photo.create!(img_url:'https://images.unsplash.com/photo-1578886141033-b9f066572135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', review: review1)
Photo.create!(img_url: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',review: review6)
Photo.create!(img_url:'https://images.unsplash.com/photo-1578886141033-b9f066572135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', review: review3)
Photo.create!(img_url: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',review: review5)