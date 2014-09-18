process.env.NODE_ENV = 'test'

expect = require 'expect.js'
moment = require 'moment/min/moment-with-locales'
ViewHelpers = require('./viewHelpers').ViewHelpers
Builders = require './builders'


describe 't-datetime', ->
  before () ->
    @date = moment('2000/07/20')
    @builder = new Builders('en', moment)

  describe 'builders', ->
    describe 'buildYearView', ->
      it 'should return an array of months and dates', () ->
        r = @builder.buildYearView(@date)
        e = [ 
          { abbr: 'Jan', date: '2000-01' }
          { abbr: 'Feb', date: '2000-02' }
          { abbr: 'Mar', date: '2000-03' }
          { abbr: 'Apr', date: '2000-04' }
          { abbr: 'May', date: '2000-05' }
          { abbr: 'Jun', date: '2000-06' }
          { abbr: 'Jul', date: '2000-07' }
          { abbr: 'Aug', date: '2000-08' }
          { abbr: 'Sep', date: '2000-09' }
          { abbr: 'Oct', date: '2000-10' }
          { abbr: 'Nov', date: '2000-11' }
          { abbr: 'Dec', date: '2000-12' }
        ]
        expect(r).eql(e)

    describe 'buildMonthView', ->
      it 'should return an array of months and dates', () ->
        @date = moment('2000/07/20')
        r = @builder.buildMonthView(@date)
        e = [ 
              [ 
                { date: 25, fullDate: '2000-06-25', thisMonth: false },
                { date: 26, fullDate: '2000-06-26', thisMonth: false },
                { date: 27, fullDate: '2000-06-27', thisMonth: false },
                { date: 28, fullDate: '2000-06-28', thisMonth: false },
                { date: 29, fullDate: '2000-06-29', thisMonth: false },
                { date: 30, fullDate: '2000-06-30', thisMonth: false },
                { date: 1, fullDate: '2000-07-01', thisMonth: true } 
              ], [
                { date: 2, fullDate: '2000-07-02', thisMonth: true },
                { date: 3, fullDate: '2000-07-03', thisMonth: true },
                { date: 4, fullDate: '2000-07-04', thisMonth: true },
                { date: 5, fullDate: '2000-07-05', thisMonth: true },
                { date: 6, fullDate: '2000-07-06', thisMonth: true },
                { date: 7, fullDate: '2000-07-07', thisMonth: true },
                { date: 8, fullDate: '2000-07-08', thisMonth: true } 
              ], [
                { date: 9, fullDate: '2000-07-09', thisMonth: true },
                { date: 10, fullDate: '2000-07-10', thisMonth: true },
                { date: 11, fullDate: '2000-07-11', thisMonth: true },
                { date: 12, fullDate: '2000-07-12', thisMonth: true },
                { date: 13, fullDate: '2000-07-13', thisMonth: true },
                { date: 14, fullDate: '2000-07-14', thisMonth: true },
                { date: 15, fullDate: '2000-07-15', thisMonth: true } 
              ], [
                { date: 16, fullDate: '2000-07-16', thisMonth: true },
                { date: 17, fullDate: '2000-07-17', thisMonth: true },
                { date: 18, fullDate: '2000-07-18', thisMonth: true },
                { date: 19, fullDate: '2000-07-19', thisMonth: true },
                { date: 20, fullDate: '2000-07-20', thisMonth: true },
                { date: 21, fullDate: '2000-07-21', thisMonth: true },
                { date: 22, fullDate: '2000-07-22', thisMonth: true }
              ], [
               { date: 23, fullDate: '2000-07-23', thisMonth: true },
                { date: 24, fullDate: '2000-07-24', thisMonth: true },
                { date: 25, fullDate: '2000-07-25', thisMonth: true },
                { date: 26, fullDate: '2000-07-26', thisMonth: true },
                { date: 27, fullDate: '2000-07-27', thisMonth: true },
                { date: 28, fullDate: '2000-07-28', thisMonth: true },
                { date: 29, fullDate: '2000-07-29', thisMonth: true }
              ], [
                { date: 30, fullDate: '2000-07-30', thisMonth: true },
                { date: 31, fullDate: '2000-07-31', thisMonth: true },
                { date: 1, fullDate: '2000-08-01', thisMonth: false },
                { date: 2, fullDate: '2000-08-02', thisMonth: false },
                { date: 3, fullDate: '2000-08-03', thisMonth: false },
                { date: 4, fullDate: '2000-08-04', thisMonth: false },
                { date: 5, fullDate: '2000-08-05', thisMonth: false }
              ] 
            ]
        expect(r).eql(e)
