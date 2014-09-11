
class Started
  view: __dirname
  init: () ->
    @model.setNull 'stared', false

  toggle: () ->
    @model.set 'stared', not @model.get 'stared'

module.exports = Started
