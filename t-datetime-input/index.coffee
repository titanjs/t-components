moment = require 'moment/min/moment-with-locales'

module.exports = class DatetimeInput
  view: __dirname

  init: () ->
    # A Unix Offset in milliseconds
    @format = @model.get('format') or 'YYYY/MM/DD h:mm a'
    @setFormatted @model.get('value')
    @model.set 'updateFormatted', true
    @model.on 'change', 'value', (cur, pre) =>
      if @model.get 'updateFormatted'
        @setFormatted(cur)
      # Rest `updateFormatted` so the next time it will update
      @model.set 'updateFormatted', true

  setFormatted: (val) ->
    v = moment(val)
    if v.isValid()
      @model.set 'formattedValue', v.format(@format)
    else
      @model.set 'formattedValue', undefined

  setValue: (val) ->
    # We don't want to update the `formattedValue` on `value` change
    @model.set 'updateFormatted', false
    v = moment(val, @format)
    if v.isValid()
      @model.set 'value', v.valueOf()
    else
      @model.set 'value', undefined

