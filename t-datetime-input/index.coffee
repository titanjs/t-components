moment = require 'moment/min/moment-with-locales'

module.exports = class DatetimeInput
  view: __dirname

  init: () ->
    # A Unix Offset in milliseconds
    @format = @model.get('format') or 'YYYY/MM/DD h:mm a'
    @setFormatted @model.get('value')

    @model.on 'change', 'value', (cur, pre) =>
      console.log 'changed', arguments
      @setFormatted(cur)

    # @model.on 'change', 'formattedValue', (cur, pre) =>
    #   console.log 'changed formattedValue', arguments
    #   # @setValue(cur)

  setFormatted: (val) ->
    v = moment(val)
    if v.isValid()
      @model.set 'formattedValue', v.format(@format)
    else
      @model.set 'formattedValue', undefined

  setValue: (val) ->
    v = moment(val, @format)
    if v.isValid()
      @model.set 'value', v.valueOf()
    else
      @model.set 'value', undefined

