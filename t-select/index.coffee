_ = require('lodash')

optionValue = (opt) ->
  (if (opt.hasOwnProperty('value')) then opt.value else opt.content)

module.exports = class Select
  view: __dirname
  init: (model) ->
    # Passed in value. This value will corrispond to the id of the options array
    val = model.get('value')
    
    # options is an array of values 
    opts = model.get('options')

    model.set 'selectedIndex', 0
    if val and opts
      i = _.findIndex(opts,
        value: val
      )
      model.set 'selectedIndex', i
    return

  create: (model, dom) ->
    # Close on click outside of the dropdown
    @focusById model.get('selectedIndex')
    dom.on 'click', (e) =>
      # if (dropdown.toggleButton.contains(e.target)) return;
      return  if @input.contains(e.target)
      return  if @menu.contains(e.target)
      @makeInActive()

    dom.on 'keydown', (e) =>
      @keydown e

    # Watch the change of the options and update the selected element if needed
    # model.on 'change', 'options', =>
    #   model.set 'value', model.get('value')

  open: ->
    # Only open if we have a list of options
    @model.set 'open', true  if @model.get('options').length

  close: ->
    @model.set 'open', false

  makeActive: ->
    @model.set 'isActive', true
    @model.set 'open', true
    @emit 'active'

  makeInActive: ->
    @model.set 'isActive', false
    @model.set 'open', false

  isOpen: ->
    @model.get 'open'

  select: (option) ->
    @model.set 'value', optionValue(option)
    @close()

  setValue: (pos) ->
    pos = @model.get('selectedIndex')
    opts = @model.get('options')
    if pos and opts
      o = optionValue(opts[pos])
      @model.set 'value', o
      @input.focus()

  # TODO
  # Idealy this function would be replaced with something
  # that doesn't require knowing the id of the element
  focusById: (id) ->
    vid = @model.get('id') + id
    e = document.getElementById(vid)
    e.focus()  if e

  fireNew: ->
    @emit 'new'

  # e.scrollIntoView();
  increment: ->
    a = @model.get('selectedIndex')
    
    # Don't go higher then the number of elements
    return  if a >= (@model.get('options').length - 1)
    nid = a + 1
    @model.set 'selectedIndex', nid
    @focusById nid

  decrement: ->
    a = @model.get('selectedIndex')
    
    # Don't go lower then 0
    return  if a is 0
    nid = a - 1
    @model.set 'selectedIndex', nid
    @focusById nid

  keydown: (e, el) ->
    isActive = @model.get('isActive')
    
    # Return if not active
    return  unless isActive
    
    # return if this isn't active
    # e.stopPropagation();
    IS_MAC = /Mac/.test(navigator.userAgent)
    KEY_A = 65
    KEY_COMMA = 188
    KEY_RETURN = 13
    KEY_ESC = 27
    KEY_LEFT = 37
    KEY_UP = 38
    KEY_P = 80
    KEY_RIGHT = 39
    KEY_DOWN = 40
    KEY_N = 78
    KEY_BACKSPACE = 8
    KEY_DELETE = 46
    KEY_SHIFT = 16
    KEY_CMD = (if IS_MAC then 91 else 17)
    KEY_CTRL = (if IS_MAC then 18 else 17)
    KEY_TAB = 9
    TAG_SELECT = 1
    TAG_INPUT = 2
    switch e.keyCode
      when KEY_ESC
        @close()
        return
      when KEY_DOWN
        @open()  unless @isOpen()
        @increment()
        e.preventDefault()
        return
      when KEY_UP
        @decrement()
        e.preventDefault()
        return
      when KEY_TAB
        if @isOpen()
          @setValue()
          @emit 'tab'
          @makeInActive()
        return
      when KEY_RETURN
        if @isOpen()
          @setValue()
          @emit 'enter'
          @close()
        
        # this.makeInActive();
        t = String.fromCharCode(KEY_TAB)

  label:
    get: (value) ->
      options = @model.get('options') or []
      opt = _.find(options, { value: value })
      return  unless opt
      return opt.content  if value is optionValue(opt)

    set: ->
      # Filter 
      console.log 'args', arguments
