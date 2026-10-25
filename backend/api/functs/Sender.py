import smtplib

def Sender(info:dict) -> str:

    # INFORMATION FOR THE EMAIL TO BE MADE
    email:str = 'icelascleaningservicebot@gmail.com'
    app_key:str = 'skjm hvjw pojs ibku'
    # sender:str = 'icelascleaningservice@gmail.com'
    sender:str = 'bbandrade781@gmail.com'

    subject:str = 'NEW CONSULTATION RELEASED'

    print(f'\n\n{info}\n\n')
    
    # FORMAT THE TIME
    hour:int = int(info["time"][0:2])
    if hour > 12:

        hour -= 12
        time = f"{hour}{info["time"][2:]} P.M"
    
    elif hour == 12:
        
        time = f"{hour}{info["time"][2:]} P.M"
    else:

        time = info['time'] + " A.M"

    # FORMAT THE NUMBER
    number = f"{info['number'][0:3]}-{info['number'][3:6]}-{info['number'][6:]}"


    try:
        # TODO CREATE FORMATTED MESSAGE
        message:str = f'{info["name"]} has scheduled an appointment on {info["day"]} at {time}\n\nContact Number: {number}'
        text:str = f'{subject}\n\n{message}'

    except:

        text:str = 'There was an error'
    # CREATE SERVER AND SEND MESSSAGE
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    server.login(email, app_key)
    server.sendmail(email, sender, text)
