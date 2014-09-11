optionValue = (option) ->
  (if (option.hasOwnProperty("value")) then option.value else option.content)

class Dropdown
  view: __dirname
  create: (model, dom) ->
    # Close on click outside of the dropdown
    dom.on "click", (e) =>
      return  if @toggleButton.contains(e.target)
      return  if @menu.contains(e.target)
      model.set "open", false

    # Watch the change of the options and update the selected element if needed
    model.on "change", "options", ->
      model.set "value", model.get("value")

  toggle: ->
    @model.set "open", not @model.get("open")

  select: (option) ->
    @model.set "value", optionValue(option)
    @model.set "open", false

  label: (value) ->
    options = @model.get("options") or []
    i = 0
    len = options.length

    while i < len
      option = options[i]
      return option.content  if value is optionValue(option)
      i++
    @model.get("prompt") or "Select"

module.exports = Dropdown
