# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171124232325) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.string "player1"
    t.string "player2"
    t.integer "player1score"
    t.integer "player2score"
    t.string "question1"
    t.string "question1answer1"
    t.string "question1answer2"
    t.string "question1answer3"
    t.string "question1answer4"
    t.string "question1correctAnswer"
    t.string "question1answered"
    t.string "question2"
    t.string "question2answer1"
    t.string "question2answer2"
    t.string "question2answer3"
    t.string "question2answer4"
    t.string "question2correctAnswer"
    t.string "question2answered"
    t.string "question3"
    t.string "question3answer1"
    t.string "question3answer2"
    t.string "question3answer3"
    t.string "question3answer4"
    t.string "question3correctAnswer"
    t.string "question3answered"
    t.string "question4"
    t.string "question4answer1"
    t.string "question4answer2"
    t.string "question4answer3"
    t.string "question4answer4"
    t.string "question4correctAnswer"
    t.string "question4answered"
    t.string "question5"
    t.string "question5answer1"
    t.string "question5answer2"
    t.string "question5answer3"
    t.string "question5answer4"
    t.string "question5correctAnswer"
    t.string "question5answered"
    t.string "question6"
    t.string "question6answer1"
    t.string "question6answer2"
    t.string "question6answer3"
    t.string "question6answer4"
    t.string "question6correctAnswer"
    t.string "question6answered"
    t.string "question7"
    t.string "question7answer1"
    t.string "question7answer2"
    t.string "question7answer3"
    t.string "question7answer4"
    t.string "question7correctAnswer"
    t.string "question7answered"
    t.string "question8"
    t.string "question8answer1"
    t.string "question8answer2"
    t.string "question8answer3"
    t.string "question8answer4"
    t.string "question8correctAnswer"
    t.string "question8answered"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
