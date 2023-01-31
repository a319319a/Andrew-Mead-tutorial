
const yargs=require('yargs')
const notes=require('./note')
const jsonOperation=require('./json')
yargs.version('10.0.0')

// create add command

yargs.command({
    command:'add',
    description:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv) {
        // console.log("Title is "+argv.title)       
        // console.log('The body is '+argv.body) 
        // notes.getNotes()
        jsonOperation.addNote(argv.title,argv.body)
        
    }

})

yargs.command({
    command:'remove',
    description:'Remove a note',
    handler:function () {
        console.log("Removing a a command from the list")      
    }
})

yargs.command({
    command:'list',
    description:'List of the notes',
    handler:function () {
        console.log("Lists the existing notes in a row")        
    }
})

yargs.command({
    command:'read',
    description:'reading from the file of the notes',
    handler:function () {
        console.log('Read from the list and then pest it to the comman line')       
    }
})


yargs.parse()