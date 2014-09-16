moment = require 'moment/min/moment-with-locales'
ViewHelpers = require('./viewHelpers').ViewHelpers
Builders = require './builders'

module.exports = class Datepicker extends ViewHelpers
  view: __dirname

  init: (model) ->
    @lang = model.get('lang') || 'en'
    @builders = new Builders(@lang, moment)
    currentDate = moment()
    @gotoMonthView currentDate
  
  create: (model, dom) ->
    global.moment = moment
    dom.on 'click', (e) =>
      model.set 'show', true if @parent.contains(e.target)
    dom.on 'mousedown', (e) =>
      model.set 'show', false unless @parent.contains(e.target)

  gotoMonthView: (date) ->
    @setCurrentDate date
    @monthView date
  
  monthView: (date) ->
    return unless date
    date = moment(date)
    weeks = @builders.buildMonthView(date)
    @model.set 'weeks', weeks
    @model.set 'view', 'month'
  
  gotoYearView: (date) ->
    date = moment(date, 'YYYY-MM-DD')
    @setCurrentDate date, 'YYYY-MM-DD'
    @yearView date
  
  yearView: (date) ->
    months = @builders.buildYearView(date)
    @model.set 'months', months
    @model.set 'view', 'year'
  
  nextYear: ->
    # get current month
    currentDate = moment(@getCurrentDate())
  
    # calculate previous year from date
    nextYearDate = currentDate.add(1, 'years')
    @gotoYearView nextYearDate
  
  prevYear: ->
    # get current month
    currentDate = moment(@getCurrentDate())
  
    # calculate previous year from date
    prevYearDate = currentDate.subtract(1, 'years')
    @gotoYearView prevYearDate
  
  gotoDecadeView: (date) ->
    date = moment(date)
    @setCurrentDate date
    @decadeView date
  
  decadeView: (date) ->
    years = @builders.buildDecadeView(date)
    @model.set 'years', years
    @model.set 'view', 'decade'
  
  prevDecade: ->
    currentDate = moment(@getCurrentDate())
    prevDecadeDate = currentDate.subtract(10, 'years')
    @gotoDecadeView prevDecadeDate
  
  nextDecade: ->
    currentDate = moment(@getCurrentDate())
    nextDecadeDate = currentDate.add(10, 'years')
    @gotoDecadeView nextDecadeDate
  
  select: (selectedDate) ->
    date = moment(selectedDate.fullDate)
    selectedMonth = date.month()
    currentDate = moment(@getCurrentDate())
    currentMonth = currentDate.month()
    @gotoMonthView date  if selectedMonth isnt currentMonth
    @model.set 'active', selectedDate.fullDate
    @model.set 'show', false

  prevMonth: ->
    # get current month
    currentDate = moment(@getCurrentDate())
  
    # calculate previous month from date
    prevMonthDate = currentDate.subtract(1, 'months')
    @gotoMonthView prevMonthDate
  
  nextMonth: ->
    # get current month
    currentDate = moment(@getCurrentDate())
  
    # calculate previous month from date
    nextMonthDate = currentDate.add(1, 'months')
    @gotoMonthView nextMonthDate
  
  setCurrentDate: (currentDate) ->
    @model.set 'currentDate', currentDate
  
  getCurrentDate: ->
    @model.get 'currentDate'
