const cp = require('child_process');
const { exit } = require('process');

const playlist_path = `C:\\Users\\BlazingSky\\AppData\\Roaming\\Winamp\\Plugins\\ml\\playlists\\plf8E17.m3u8`
const player_path   = `M:\\Projects\\Development\\Alarm\\tools\\foobar2000\\foobar2000.exe`
const svw_path      = `M:\\Projects\\Development\\Alarm\\tools\\SoundVolumeView.exe`

const initial_volume = 10
const final_volume   = 50

function execute(cmd, silent = true) {
    return new Promise (resolve => {
        cp.exec(cmd, (error, stdout, stderr) => {
            console.log(`${cmd}`)

            if (!silent) {
                if (error) {
                    console.error(error)
                }
                else {
                    console.log(`stdout: ${stdout}`)
                    console.log(`stderr: ${stderr}`)
                }
            }

            resolve()
        })
    })
}

function sleep(ms) {
    return new Promise (resolve => setTimeout(resolve, ms))
}

async function alarm() {
    await execute(`${svw_path} /SetVolume "Headphones" ${initial_volume}`)
    execute(`"${player_path}" "${playlist_path}"`)
    await sleep(5000)

    if (initial_volume < final_volume) {
        for (let x = 0, steps = 40; x <= steps; x++) {
            volume_change = (final_volume - initial_volume) * x / steps
            volume = initial_volume + volume_change
            await execute(`${svw_path} /SetVolume "Headphones" ${volume}`)
            await sleep(1000)
        }
    }

    exit(0)
}

alarm()