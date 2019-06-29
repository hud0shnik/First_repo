int brightness = 255;
int fadeAmount = 5;
int leds[3] = {3, 5, 6};
int curPin[2] = {0,1};
int grnd = 4;
int val;

void setup() {
Serial.begin(9600);
    pinMode(grnd, OUTPUT);
  for(int i = 0; i < 3; i++)
    pinMode(leds[i], OUTPUT);
}

void loop() { 
if (Serial.available())
{
val = Serial.read();
if (val == '1')
{
  dio();
}
if (val == '0'){
    
}
}  
}
void dio(){
  digitalWrite(grnd, 0);
analogWrite(leds[curPin[0]], brightness);
analogWrite(leds[curPin[1]], 255 - brightness);

brightness = brightness - fadeAmount;

if (brightness == 0){
  curPin[0] = (curPin[0] + 1) % 3;
  curPin[1] = (curPin[1] + 1) % 3;
  brightness = 255;
}

delay(30);
}
