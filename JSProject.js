/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your createTask (i.e mintNFT) function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your displayTasks() (i.e. listNFTs()) function will print all of your NFTs metadata to the console (i.e. console.log("Title: " + someNFT.title)).
4. For good measure, countTasks() (i.e getTotalSupply()) should return the number of NFTs you have created.
*/

// Create a variable to hold your NFTs
let taskCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function createTask(taskID, taskName, taskSubject, taskDueDate, taskStatus) {
    const task = {
        id: taskID,
        name: taskName,
        subject: taskSubject,
        dueDate: taskDueDate,
        status: taskStatus
    };

    taskCollection.push(task);
    console.log("Created Task: " + taskName);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function displayTasks() {
    for (let i = 0; i < taskCollection.length; i++) {
        const task = taskCollection[i];
        console.log(`\nID: ${task.id}, Name: ${task.name}, Subject: ${task.subject}, Due Date: ${task.dueDate}, Status: ${task.status}`);
    }
}

// Print the total number of NFTs we have minted to the console
function countTasks() {
    console.log("\nTotal Tasks: " + taskCollection.length);
}

// Call your functions below this line
createTask(1, "Assignment", "Operating System", "2024-05-30", "Incomplete");
createTask(2, "Project", "Computer Networking", "2024-06-05", "Complete");
createTask(3, "Quiz", "Database Management System", "2024-06-01", "Incomplete");
createTask(4, "Case Study", "Data Structures and Algorithms", "2024-06-03", "Complete");

displayTasks();
countTasks();
