# REPL for ruby (on terminal)
# irb





# Run ruby files on terminal
# ruby <filepath>





# Print
puts "Hello from Ruby"






# RUBY TYPES
"Ruby" # String
42     # Integer
3.14   # Float
true   # TrueClass
nil    # NilClass





# Checking types
puts 42.class
puts true.class





# Casting types
# string => number
"42".to_i





# number => string
42.to_s





# Data structures
ruby_arr = ["first", 2, true]





ruby_obj = { name: 'alecio', age: 23 }
ruby_obj2 = { 'name' => 'alecio', 'age' => 23 }





# VARIABLES

avatar = "Aang"
avatar += ", the last airbender"




# STRINGS

# length
avatar.size





# character access
avatar[6]





# substring
avatar.slice(6..9)





# Case manipulation
avatar.upcase
avatar.downcase





# split
# string => array
team_avatar_string = "Aang, Katara, Sokka"
avatar.split(", ")

first_name = "Toph"
last_name = "Beifong"
# interpolation
puts "#{first_name} #{last_name} is the fourth member of team avatar"


# ARRAYS
team_avatar = ['Aang', 'Katara', 'Sokka']

# Array CRUD
team_avatar << 'Toph'
team_avatar[1]
team_avatar[2] = 'Zuko'
team_avatar.delete_at(2)

# Loop with each
team_avatar.each do |member|
  puts member.upcase
end 


# CONTROL FLOW

bender = 'Toph'

if bender == 'Toph'
  puts "#{bender} is the best bender!"
elsif
  puts "#{bender} is also great, but not the best."
else
  puts "Nice try, but no"
end

# ternary operator
puts bender == 'Toph' ? "Best bender!" : "Nice try"

# Falsy values
# nil
# false


# OBJECTS
team_avatar_benders = { aang: 'air', katara: 'water', toph: 'earth' }

# reading a property
team_avatar_benders[:aang]

# setting a property
team_avatar_benders[:zuko] = 'fire'

# iterating through an object
team_avatar_benders.each do |member, element|
  puts "#{member} bends #{element}"
end 


# FUNCTIONS
def introduce_pet(name)
  puts "#{name} is an awesome pet"
end

introduce_pet('Appa')

