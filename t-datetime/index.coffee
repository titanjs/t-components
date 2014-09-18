moment = require 'moment/min/moment-with-locales'
ViewHelpers = require('./viewHelpers').ViewHelpers
Builders = require './builders'

module.exports = class Datepicker extends ViewHelpers
  view: __dirname

  init: () ->
    @lang = @model.get('lang') || 'en'
    @builders = new Builders(@lang, moment)
    # Use todays date if date is `undefined`
    @setCurrent moment(@model.get('value') or Date.now())
    @gotoMonthView @getCurrent().format('YYYY-MM')
  
  create: (model, dom) ->
    global.moment = moment
    dom.on 'click', (e) =>
      model.set 'show', true if @parent.contains(e.target)
    dom.on 'mousedown', (e) =>
      model.set 'show', false unless @parent.contains(e.target)

  setCurrent: (val) ->
    @model.set 'currentDate', val

  getCurrent: () ->
    @model.get 'currentDate'

  add: (number, unit) ->
    @setCurrent @getCurrent().add(number, unit)
    @getCurrent()

  subtract: (number, unit) ->
    @setCurrent @getCurrent().subtract(number, unit)
    @getCurrent()

  select: (selectedDate) ->
    date = moment(selectedDate.fullDate)
    @gotoMonthView date  if date.month() isnt @getCurrent().month()

    # Set date in milliseconds offset
    @model.set 'value', +date
    @model.set 'show', false

  gotoMonthView: (date) ->
    @setCurrent moment(date, 'YYYY-MM')
    @model.set 'weeks', @builders.buildMonthView(@getCurrent())
    @model.set 'view', 'month'
  
  gotoYearView: (date) ->
    @setCurrent moment(date, 'YYYY-MM')
    @model.set 'months', @builders.buildYearView(@getCurrent())
    @model.set 'view', 'year'
  
  gotoDecadeView: (date) ->
    @setCurrent moment(date, 'YYYY')
    @model.set 'years',  @builders.buildDecadeView(@getCurrent())
    @model.set 'view', 'decade'
  
  prevMonth:  -> @gotoMonthView  @subtract(1, 'months')
  nextMonth:  -> @gotoMonthView  @add(1, 'months')
  prevYear:   -> @gotoYearView   @subtract(1, 'years')
  nextYear:   -> @gotoYearView   @add(1, 'years')
  prevDecade: -> @gotoDecadeView @subtract(10, 'years')
  nextDecade: -> @gotoDecadeView @add(10, 'years')
  
