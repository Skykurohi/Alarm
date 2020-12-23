for /l %%x in (1, 1, 100) do (
    nircmdc sendkeypress 0xAF
)

"M:\Projects\Development\Alarm\tools\nircmdc.exe" setdefaultsounddevice "Realtek Digital Output" 1
"M:\Projects\Development\Alarm\tools\nircmdc.exe" mutesysvolume 0

for /l %%x in (1, 50, 100) do (
	echo %%x
    set /a volume = 65535 * %%x / 100
	"M:\Projects\Development\Alarm\tools\nircmdc.exe" setsysvolume %volume%
	sleep 0.5
)

"C:\Program Files (x86)\Winamp\winamp.exe" "C:\Users\BlazingSky\AppData\Roaming\Winamp\Plugins\ml\playlists\plf8E17.m3u8"