#!/usr/bin/env python3
import serial
import time

port = "/dev/ttyACM0"   # Your Arduino's serial port
baud = 9600             # Must match Serial.begin() in Arduino code

ser = serial.Serial(port, baud, timeout=1)
time.sleep(2)  # Wait for Arduino to reset after opening serial

print("Listening to Arduino...")

while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8', errors='ignore')
        print(line, end="", flush=True)
