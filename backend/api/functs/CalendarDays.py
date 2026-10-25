
import datetime as dt

class Calendar():

    '''
    
    GENERATE THE CALENDAR BASED ON THE NEXT DAYS NEEDED
    
    '''

    '''
    HOLIDAYS PRESENT:
        - BIRTHDAYS
        - NEW YEARS + EVE
        - CHRISTMAS + EVE
    
    '''

    


    def __init__(self, month:int, year:int, dates:list):

        self.calendar:list = [[]]
        self.days:list = []
        self.month:int = month
        self.dates:list = dates
        self.year:int = year

        self.holidays = [
            {
                "month": 1,
                "day": 1 # NEW YEARS
            },

            {
                "month": 6,
                "day": 16 # PAPA'S BIRTHDAY
            },

            
            {
                "month": 10,
                "day": 31 # RAFFY'S BIRTHDAY
            },

            {
                "month": 11,
                "day": 20 # BRANDON'S BIRTHDAY
            },

            {
                "month": 11,
                "day": 25 # MAMA'S BIRTHDAY
            },

            {
                "month": 11,
                "day": self.findHoliday(11, 4, 3) # THANKSGIVING
            },

            {
                "month": 12,
                "day": 24 # CHRISTMAS EVE
            },

            {
                "month": 12,
                "day": 25 # CHRISTMAS
            },

            {
                "month": 12,
                "day": 31 # NEW YEARS EVE
            }]
        

    # FIND A HOLIDAY THATS BASED ON A DAY OF "X" WEEK
    def findHoliday(self, month:int, week:int, weekday:int) -> int:
        
        # REMEMBER MONDAY == 0, SUNDAY == 6
        first = dt.datetime(self.year, month, 1)
        first_weekday = first.weekday()

        # SKIP TO THE APPROPIATE WEEK 

        day = first.day + week * 7

        # FIND THE DISTANCE BETWEEN DAYS
        day_delta = weekday - first_weekday

        # SHIFTS THE DAY TO THE APPROPIATE TIME
        return day + day_delta


    def checkDate(self):

        value:list = []
        
        # DATABASE DATES
        for date in self.dates:
            
            # [MONTH(SPELLED OUT), DAY, YEAR]
            res = date.day.split()
            
            if dt.datetime.strptime(res[0], "%B").month == self.month and int(res[2]) == self.year:

                value.append({"month": res[0], "day": int(res[1]), "year": int(res[2])})
                
        # HOLIDAY DATES
        for date in self.holidays:

            if date['month'] == self.month:

                value.append( {"month": self.month, "day": date['day'], "year": self.year} )

        return value

    def generate(self):
        
        # TODAY'S DATE
        today:object = dt.datetime.now()

        # GATHERS THE ONLY PLAUSIBLE DATES FOR THE CAL
        self.dates = self.checkDate()

        # GENERATE THE DAYS INTO A DICTIONARY
        day:int = 1

        while True:    

            try:
                  
                # GETS THE DAY CURRENTLY TRYING TO ADD
                currentDay:object = dt.date(self.year, self.month, day)
                # DEFAULT AVAILABILITY 
                avail = True

                # CHANGES AVAIL IF ITS ON THE DB
                for appointment in self.dates:

                    if appointment['day'] == currentDay.day: 
                        avail = False

                # CHECKS IF CURRENTDAY FRIDAY - SUNDAY

                # print(f"{currentDay.day} : {currentDay.strftime("%A")}")
                if currentDay.strftime("%A") in ["Friday", "Saturday", "Sunday"] or (currentDay.day <= today.day and self.month == today.month ):

                    avail = False
                        

                # ADDS NAME TO DICTIONARY
                self.days.append( { 'day': currentDay.day, 'availible': avail } )
                day += 1

            except:

                # WHEN THE DAY DOESN'T EXIST, IT STOPS THE LOOP
                break

        # ADD FILLERS INTO THE WEEKS

        fillers:int = dt.date(self.year, self.month, 1).weekday()
        
        for filler in range(fillers):

            self.days.insert(0, {'availible': False})

        return self.days

        # cur:int = 0
        # while len(self.days) != 0:

        #     if len(self.calendar[cur]) < 7:

        #         self.calendar[cur].append(self.days.pop(0))

        #     else:

        #         self.calendar.append([])
        #         cur += 1

        # return self.calendar

        

# TESTING
def testing():
    time = '11-2025'
    m_y = time.split('-')
    m_y = list(map(lambda x: int(x), m_y))

    dummy_dates = [
        {
            'day': "November 19 2025"
        }
    ]

    calendar = Calendar(m_y[0], m_y[1], dummy_dates)
    print(calendar.generate())
    # print(calendar.days())


# testing()