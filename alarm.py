import subprocess
import time
import sys

# Configure
playlist_path = 'C:\\Users\\BlazingSky\\AppData\\Roaming\\Winamp\\Plugins\\ml\\playlists\\plf8E17.m3u8'
player_path   = 'M:\\Projects\\Development\\Alarm\\tools\\foobar2000\\foobar2000.exe'
svv_path      = 'M:\\Projects\\Development\\Alarm\\tools\\SoundVolumeView.exe'
svv_target    = 'Headphones'

initial_volume = 10
final_volume   = 20

def execute(cmd, wait=True):
  print(cmd)
  if wait:
    subprocess.call(cmd, shell=True)
  else:
    subprocess.Popen(cmd, shell=True)

def main():
  execute(f'{svv_path} /SetVolume "{svv_target}" {initial_volume:.1f}')
  execute(f'"{player_path}" "{playlist_path}"', False)

  if initial_volume < final_volume:
    x     = 0
    steps = final_volume - initial_volume
    while x <= steps:
      volume_change = (final_volume - initial_volume) * x / steps
      volume = initial_volume + volume_change
      execute(f'{svv_path} /SetVolume "{svv_target}" {volume:.1f}')
      time.sleep(4)
      x += 1

start = time.perf_counter()
main()
print(f'Completed in {time.perf_counter() - start} ms')