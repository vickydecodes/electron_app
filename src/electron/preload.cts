const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
    subscribeStatistics: (callback: (statistics: any) => void) => {
        electron.ipcRenderer.on('statistics', (idx: any, stats:any) => {
            callback(stats)
        })
    },
    getStaticData: () => electron.ipcRenderer.invoke("getStaticData")
})