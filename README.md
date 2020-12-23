# Shuffle-Playlist-Alarm
Script that plays a shuffled playlist, starting with a different song every time it is executed with volume adjustment

# Installation

Foobar2000: https://www.foobar2000.org/download
- Install standalone portable installation into tools folder

SoundVolumeView: https://www.nirsoft.net/utils/sound_volume_view.html
- Install executable into tools folder

Modify script variables under # Configure

Add a schedule in Windows Task Scheduler to run alarm.bat at whatever frequency/setting you desire

Change playback settings in foobar as desired
- Playback > Order > Random (To have a random song play every run)
- File > Preferences > Playback > Output (To choose audio output device such as Bluetooth Speakers to playback from)
