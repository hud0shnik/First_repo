#include <Servo.h>
Servo myservo;
int enableA = 1;
int pinA1 = 3;
int pinA2 = 2;

int servposnum = 0;
int servpos = 0;

int enableB = 6;
int pinB1 = 5;
int pinB2 = 4;
#define trigPin 7
#define echoPin 8


void setup() {
  // put your setup code here, to run once:
  //configure pin modes for the drive motors
   pinMode (enableA, OUTPUT);
   pinMode (pinA1, OUTPUT);
   pinMode (pinA2, OUTPUT);

   pinMode (enableB, OUTPUT);
   pinMode (pinB1, OUTPUT);
   pinMode (pinB2, OUTPUT); 

   //configure pin modes for the ultrasonci se3nsor
   pinMode(trigPin, OUTPUT);
   pinMode(echoPin, INPUT);

   //Servo pins
   myservo.attach(9);
}

void loop() {
     car();
     avoid();
     
}

//Defining functions so it's more easy
//motor functions
void motorAforward() {
 digitalWrite (pinA1, HIGH);
 digitalWrite (pinA2, LOW);
}
void motorBforward() {
 digitalWrite (pinB1, LOW);
 digitalWrite (pinB2, HIGH);
}
void motorAbackward() {
 digitalWrite (pinA1, LOW);
 digitalWrite (pinA2, HIGH);
}
void motorBbackward() {
 digitalWrite (pinB1, HIGH);
 digitalWrite (pinB2, LOW);
}
void motorAstop() {
 digitalWrite (pinA1, HIGH);
 digitalWrite (pinA2, HIGH);
}
void motorBstop() {
 digitalWrite (pinB1, HIGH);
 digitalWrite (pinB2, HIGH);
}
void motorAcoast() {
 digitalWrite (pinA1, LOW);
 digitalWrite (pinA2, LOW);
}
void motorBcoast() {
 digitalWrite (pinB1, LOW);
 digitalWrite (pinB2, LOW);
}
void motorAon() {
 digitalWrite (enableA, HIGH);
}
void motorBon() {
 digitalWrite (enableB, HIGH);
}
void motorAoff() {
 digitalWrite (enableA, LOW);
}
void motorBoff() {
 digitalWrite (enableB, LOW);
}
// Movement functions
void forward (int duration) {
 motorAforward();
 motorBforward();
 delay (duration);
}
void backward (int duration) {
 motorAbackward();
 motorBbackward();
 delay (duration);
}
void right (int duration) {
 motorAbackward();
 motorBforward();
 delay (duration);
}
void left (int duration) {
 motorAforward();
 motorBbackward();
 delay (duration);
}
void coast (int duration) {
 motorAcoast();
 motorBcoast();
 delay (duration);
}
void breakRobot (int duration) {
 motorAstop();
 motorBstop();
 delay (duration);
}
void disableMotors() {
 motorAoff();
 motorBoff();
}
void enableMotors() {
 motorAon();
 motorBon();
}

int distance() {
  int duration, distance;
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(1000);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration/2) / 29.1;
  return distance;
}


void car() {
int distance_0;
distance_0 = distance();
  while(distance_0 > 15)
  {
     
     if(servposnum == 0)
     {
      myservo.writeMicroseconds (1900);
      servposnum = 1;
      delay(100);     
     }
     else if(servposnum == 1)
     {
      myservo.writeMicroseconds (2200);
      servposnum = 2;
     delay(100);
     }
     else if(servposnum  == 2)
     {
      myservo.writeMicroseconds (1900);
      servposnum = 3;
      delay(100);
     }
     else if(servposnum == 3)
     {
      myservo.writeMicroseconds (1600);
      servposnum = 1;
      delay(100);
     }
     motorAon();
     motorBon();
     forward(1);    
     distance_0 = distance();
     

  }
  breakRobot(0);

}
void avoid()
{
    backward(500);
    right(360);
}
