# Alarm
Script that plays a shuffled playlist, starting with a different song every time it is executed with scaling volume adjustment

# Installation

- Python 3.x: https://www.python.org/downloads/ 

- foobar2000: https://www.foobar2000.org/download
  - Install standalone portable installation into tools folder

- SoundVolumeView: https://www.nirsoft.net/utils/sound_volume_view.html
  - Install executable into tools folder

- Modify script variables in alarm.py to match your environment

- Add a schedule in Windows Task Scheduler to run alarm.bat at whatever frequency/setting you desire

- Change playback settings in foobar2000 as desired
  - Playback > Order > Random (To have a random song play every run)
  - File > Preferences > Playback > Output (To choose audio output device to playback from)
