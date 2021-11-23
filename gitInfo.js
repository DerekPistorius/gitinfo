/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition = 'GIT is a program, it is a version control system that allows indivituals and teams to track changes to code projects'
//console.log (gitDefinition)
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition = ' GitGub is a git repository hosting service. Essentially it can be used as cloud service for GIT. Enabling cloud saving and making it easier to collaborate'
//console.log(gitHubDefinition)

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = { 
    description: 'initialize a local repository right here in this folder',
    code: 'git init',
}

//console.log(init)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: 'this is a command used to create a copy of a specific repository or branch within a repository.',
    code: 'git clone [url]',
    
}
//console.log(clone);
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description: 'shows the current state of your Git working directory and staging area',
    code: 'git status'
}
//console.log(status)
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description:'this command adds new or changed files in your working directory to the Git staging area',
    code: 'git add <path>'
}
//console.log(add);
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: 'creates a snapshot of your repository at specific times.',
    code: 'git commit -m "Type your message here"'
}
//console.log(commit);
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: 'uploads all local branch commits to the corresponding remote branch.',
    code: 'git push origin master'
}
//console.log(push);