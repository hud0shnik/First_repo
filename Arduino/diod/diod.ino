int brightness = 255;
int fadeAmount = 5;
int leds[3] = {9, 10, 11};
int curPin[2] = {0,1};

void setup() {
  // put your setup code here, to run once:
  for(int i = 0; i < 3; i++)
    pinMode(leds[i], OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
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
