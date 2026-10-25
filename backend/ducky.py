# FUNCTION TO MAKE PHONEBOOK
def PhoneBook():

    # MAKE DICTIONARY
    phone_book = {}

    # STARTING LOOP FOR USER INPUT
    while True:

        

        name = input("Enter someone's name: ")
        number = input("Enter someone's number: ")

        # ADD TO DICT
        phone_book[name] = number

        # ASK USER TO QUIT
        ans = input("Do you want to quit? (y) ")
        if ans == 'Y' or ans == 'y':
            break

    return phone_book

# ACTUAL CODE STARTS HERE
phone_book = PhoneBook()
