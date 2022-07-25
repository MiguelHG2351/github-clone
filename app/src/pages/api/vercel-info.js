import { exec } from 'child_process'
import os from 'os'

function getEcho() {
    return new Promise((resolve, reject) => {
        exec(`echo "Hello, ${os.userInfo().username}!"`, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                reject(err)
            }
            resolve(stdout)
        })
    })
}

export default async function handler(req, res) {
    // echo
    const data = await getEcho()
    
    return res.json({
        data: os.cpus(),
        os: os.platform(),
        echo: data
    })
}