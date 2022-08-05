// video -2

// 1. if the server response without sending data to another server or data center. the task called -CPU intensive task
// 2. if the server need to request to another server or data base then the task is called
// -I/O intensive task (input/output)
// Node js is mainly work for i/o intensive task purpose it is not for cup intensive task
// Non-blocking I/O -  where node js give task of another workers to bring data from database or server.
// Asynchronous / callback function - when the worker get the data from database it give to the thread which is not synchronous.

// Libuv- made for node.js which use carnal of the system which has multiple threads. the workers are the threads here .

//node module/file are capsulated means the file is not be accessible from outside. and the variable will not set globally 

//exports, require, module , __filename, __dirname is the parameter of the function which is applied in every node module thats thats way we can access them easily. the function is called the IC function. 
