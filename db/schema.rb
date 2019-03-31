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

ActiveRecord::Schema.define(version: 2019_03_31_004438) do

  create_table "cake_layers", force: :cascade do |t|
    t.integer "cake_id"
    t.integer "layer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cakes", force: :cascade do |t|
    t.string "structure", default: "layered"
    t.string "occasion"
    t.integer "diameter"
    t.float "price"
    t.string "img_url"
    t.boolean "ordered", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "flavor_combination"
  end

  create_table "layers", force: :cascade do |t|
    t.string "flavor"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "pastry_part"
  end

end
