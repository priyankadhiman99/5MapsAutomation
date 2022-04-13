/// <reference types="cypress" />

const fs = require('fs')
const { rmdir } = require('fs')

module.exports = (on, config) => {

  //command to verify file is downloaded in downloads folder
  on('task', {
    getFileName(folderName) {
      return new Promise((resolve, reject) => {
        fs.readdir(folderName, (err, files) => {
          if (err) {
            return reject(err)
          }

          if (files.length > 0) {
            return resolve(files[0])
          }
          reject(undefined)
        })
      })
    },


  //command to automatically delete files in downloads folder
  //on('task', {
    deleteFolder(folderName) {
      console.log('deleting folder %s', folderName)

      return new Promise((resolve, reject) => {
        rmdir(folderName, (err) => {
          if (err) {
            console.error(err)
            return reject(err)
          }
          resolve(null)
        })
      })
    },
  })
}


